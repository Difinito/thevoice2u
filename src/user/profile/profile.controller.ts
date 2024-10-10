import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProfileService } from './profile.service';
import { ProfileDto } from './profile.dto';
import { Public } from '../decorators';

@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Public()
  @Get('AllUsers')
  async getUsers() {
    return this.profileService.getAllProfiles();
  }
  @Public()
  @Get('/:id')
  async getCourseById(@Param('id') id: string) {
    return await this.profileService.getProifleById(id);
  }

  @Public()
  @Post('/update/:id')
  async updateProfile(@Param('id') id: string, @Body() data: ProfileDto) {
    return await this.profileService.updateProfile(id, data);
  }

  @Public()
  @Post('/create')
  async saveDepartment(@Body() profile: ProfileDto) {
    return await this.profileService.createProfile(profile);
  }
}
