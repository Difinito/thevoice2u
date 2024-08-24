import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { UserDto } from '../dto';
import { Tokens } from '../types';
import { RtGuard } from './rt.guard';
import { GetCurrentUser, GetCurrentUserId, Public } from '../decorators';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @Public()
  @Get('AllUsers')
  async getUsers() {
    return this.authService.getAllUsers();
  }

  @Public()
  @Post('local/signup')
  @HttpCode(HttpStatus.CREATED)
  async signUpLocal(@Body() authDto: UserDto): Promise<Tokens> {
    return this.authService.signUpLocal(authDto);
  }

  @Public()
  @Post('local/signin')
  @HttpCode(HttpStatus.OK)
  async signInLocal(@Body() authDto: UserDto): Promise<Tokens> {
    return await this.authService.signInLocal(authDto);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@GetCurrentUserId() userId: string) {
    return this.authService.logOut(userId);
  }

  @Public()
  @Post('refresh')
  @UseGuards(RtGuard)
  @HttpCode(HttpStatus.OK)
  async refreshTokens(
    @GetCurrentUserId() userId: string,
    @GetCurrentUser('refreshToken') refreshToken: string,
  ) {
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
