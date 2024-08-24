import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AtStrategy, RtStrategy } from '../strategies';
import { PostService } from 'src/app functions/services/post.service';
import { PostController } from 'src/app functions/controller/post.contoller';
import { ProfileController } from 'src/app functions/controller/profile.controller';
import { ProfileService } from 'src/app functions/services/profile.service';

@Module({
  imports: [JwtModule.register({})],
  providers: [AuthService, AtStrategy, RtStrategy, PostService, ProfileService],
  controllers: [AuthController, PostController, ProfileController],
})
export class AuthModule {}
