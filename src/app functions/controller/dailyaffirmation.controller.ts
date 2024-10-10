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
import { DailyAffirmationService } from '../services/dailyaffirmation.service';
import { DailyAffirmationDto } from '../dto/dailyaffirmation.dto';

@ApiTags('Church')
@Controller('DailyAffirmation')
export class DailyController {
  constructor(private churchpage: DailyAffirmationService) {}

  @Public()
  @Get('/:id')
  async getCourseById(@Param('id', ParseIntPipe) id: string) {
    return await this.churchpage.getAffirmationById(id);
  }

  @Public()
  @Get('/allDailyAffirmation')
  async getPost(user: DailyAffirmationDto) {
    return await this.churchpage.getAllDailyAffirmation();
  }

  @Public()
  @Post('/create')
  async saveDepartment(@Body() courses: DailyAffirmationDto) {
    return await this.churchpage.createDailyAffirmation(courses);
  }
}
