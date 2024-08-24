import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/user/decorators';
import { PostService } from '../services/post.service';
import { PostDto } from '../dto/post.dto';
import { ProfileService } from '../services/profile.service';
import { ProfileDto } from 'src/user/dto/profile.dto';

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
