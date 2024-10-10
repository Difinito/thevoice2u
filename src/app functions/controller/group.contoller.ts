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
import { GroupService } from '../services/group.service';
import { GroupDto } from '../dto/group.dto';

@ApiTags('GroupFamily Api')
@Controller('GroupFamily')
export class GroupController {
  constructor(private counsellors: GroupService) {}

  @Public()
  @Get('/:id')
  async getCourseById(@Param('id', ParseIntPipe) id: string) {
    return await this.counsellors.getGroupById(id);
  }

  @Public()
  @Get('/allGroup')
  async getPost(user: GroupDto) {
    return await this.counsellors.getAllGroup();
  }

  @Public()
  @Post('/create')
  async saveDepartment(@Body() courses: GroupDto) {
    return await this.counsellors.createGroup(courses);
  }
}
