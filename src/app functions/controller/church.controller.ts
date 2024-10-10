import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from '../../user/decorators';

import { PostDto } from '../dto/post.dto';
import { ChurchPageService } from '../services/churchpage.service';
import { ChurchPageDto } from '../dto/churchpage.dto';

@ApiTags('Church')
@Controller('Church')
export class ChurchController {
  constructor(private churchpage: ChurchPageService) {}

  @Public()
  @Get('/:id')
  async getCourseById(@Param('id', ParseIntPipe) id: string) {
    return await this.churchpage.getChurchPageById(id);
  }

  @Public()
  @Get('/allChurch')
  async getPost(user: PostDto) {
    return await this.churchpage.getAllChurch();
  }

  @Public()
  @Post('/create')
  async saveDepartment(@Body() courses: ChurchPageDto) {
    return await this.churchpage.createChurch(courses);
  }
}
