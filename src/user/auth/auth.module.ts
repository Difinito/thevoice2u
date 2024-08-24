import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AtStrategy, RtStrategy } from '../strategies';
import { ProfileController } from '../../app functions/controller/profile.controller';
import { PostController } from '../../app functions/controller/post.contoller';
import { PostService } from '../../app functions/services/post.service';
import { ProfileService } from '../../app functions/services/profile.service';

@Module({
  imports: [JwtModule.register({})],
  providers: [AuthService, AtStrategy, RtStrategy, PostService, ProfileService],
  controllers: [AuthController, PostController, ProfileController],
})
export class AuthModule {}
