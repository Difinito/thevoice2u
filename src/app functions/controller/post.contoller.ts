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
import { PostService } from '../services/post.service';
import { PostDto } from '../dto/post.dto';

@ApiTags('Post')
@Controller('Post')
export class PostController {
  constructor(private postService: PostService) {}

  @Public()
  @Get('/:id')
  async getCourseById(@Param('id', ParseIntPipe) id: string) {
    return await this.postService.getFeedById(id);
  }

  @Public()
  @Get('/allPost')
  async getPost(user: PostDto) {
    return await this.postService.getAllPost();
  }

  @Public()
  @Post('/create')
  async saveDepartment(@Body() courses: PostDto) {
    return await this.postService.createFeed(courses);
  }
}
