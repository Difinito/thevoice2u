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
import { CounsellorsService } from '../services/counsellors.service';
import { CounsellorsDto } from '../dto/counsellors.dto';

@ApiTags('Counsellors Api')
@Controller('Counsellors')
export class CounsellorsController {
  constructor(private counsellors: CounsellorsService) {}

  @Public()
  @Get('/:id')
  async getCourseById(@Param('id', ParseIntPipe) id: string) {
    return await this.counsellors.getCounsellorsById(id);
  }

  @Public()
  @Get('/allCounsellors')
  async getPost(user: CounsellorsDto) {
    return await this.counsellors.getAllCounsellors();
  }

  @Public()
  @Post('/create')
  async saveDepartment(@Body() courses: CounsellorsDto) {
    return await this.counsellors.createCounsellors(courses);
  }
}
