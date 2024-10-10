import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AtStrategy, RtStrategy } from '../strategies';

import { PostController } from '../../app functions/controller/post.contoller';
import { PostService } from '../../app functions/services/post.service';
import { ProfileController } from '../profile/profile.controller';
import { ProfileService } from '../profile/profile.service';
import { GroupController } from '../../app functions/controller/group.contoller';
import { DailyController } from '../../app functions/controller/dailyaffirmation.controller';
import { ChurchController } from '../../app functions/controller/church.controller';
import { CounsellorsController } from '../../app functions/controller/counsellors.controller';
import { GroupService } from '../../app functions/services/group.service';
import { DailyAffirmationService } from '../../app functions/services/dailyaffirmation.service';
import { ChurchPageService } from '../../app functions/services/churchpage.service';
import { CounsellorsService } from '../../app functions/services/counsellors.service';

@Module({
  imports: [JwtModule.register({})],
  providers: [
    AuthService,
    AtStrategy,
    RtStrategy,
    PostService,
    ProfileService,
    GroupService,
    DailyAffirmationService,
    ChurchPageService,
    CounsellorsService,
  ],
  controllers: [
    AuthController,
    PostController,
    ProfileController,
    GroupController,
    DailyController,
    ChurchController,
    CounsellorsController,
  ],
})
export class AuthModule {}
