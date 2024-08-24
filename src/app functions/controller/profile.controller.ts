import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ProfileService } from '../services/profile.service';
import { Public } from '../../user/decorators';
import { ProfileDto } from '../../user/dto/profile.dto';

@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
  constructor(private postService: ProfileService) {}

  @Public()
  @Get('/:id')
  async getCourseById(@Param('id', ParseIntPipe) id: string) {
    return await this.postService.getProifleById(id);
  }

  @Public()
  @Post('/create')
  async saveDepartment(@Body() profile: ProfileDto) {
    return await this.postService.createProfile(profile);
  }
}
