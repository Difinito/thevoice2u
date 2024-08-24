import {
  ConflictException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from '../dto';
import { Tokens } from '../types';

@Injectable()
export class AuthService {
  constructor(
    private prismService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async getAllUsers() {
    const allUsers = await this.prismService.user.findMany({});
    return allUsers;
  }

  async signUpLocal(dto: UserDto): Promise<Tokens> {
    const hash = await this.hashData(dto.password);
    const user = await this.prismService.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (user) throw new ConflictException('User already exists!');
    const newUser = await this.prismService.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });

    const tokens = await this.getTokens(newUser.id, newUser.email);
    await this.updateRtHash((await newUser).id, tokens.refresh_token);
    return tokens;
  }

  async isUserExists(createUserDto: UserDto): Promise<any> {
    const { email } = createUserDto;
    const user = await this.prismService.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });
    if (user) return true;
    else return false;
  }

  async signInLocal(dto: UserDto): Promise<Tokens> {
    const user = await this.prismService.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user)
      throw new ForbiddenException('Credentials not correct', {
        cause: new Error(),
        description: 'Please Provide a valid Credentials.',
      });
    const passwordMatched = await bcrypt.compare(dto.password, user.hash);

    if (!passwordMatched) throw new ForbiddenException('Access Denied');
    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);
    return tokens;
  }

  async logOut(userId: string) {
    await this.prismService.user.updateMany({
      where: {
        id: userId,
        hashedRt: {
          not: null,
        },
      },
      data: {
        hashedRt: null,
      },
    });
  }

  async refreshTokens(userId: string, rt: string) {
    const user = await this.prismService.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user || !user.hashedRt) throw new ForbiddenException('Access Denied');

    const reMatches = bcrypt.compare(rt, user.hashedRt);

    if (!reMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens((await user).id, (await user).email);
    await this.updateRtHash((await user).id, tokens.refresh_token);
    return tokens;
  }

  async updateRtHash(userId: string, rt: string) {
    const hash = await this.hashData(rt);
    await this.prismService.user.update({
      where: {
        id: userId,
      },
      data: {
        hashedRt: hash,
      },
    });
  }

  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async getTokens(userId: string, email: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: 'at-secret',
          expiresIn: 60 * 15,
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: 'rt-secret',

          expiresIn: 60 * 60 * 24 * 7,
        },
      ),
    ]);
    return {
      access_token: at,
      refresh_token: rt,
    };
  }
}
