import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
// import {UserRole} from '@prisma/client';

type JwtPayLoad = {
  sub: string;
  email: string;
  // role:UserRole;
};

@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'at-secret',
    });
  }

  async validate(payload: JwtPayLoad) {
    return payload;
  }
}
