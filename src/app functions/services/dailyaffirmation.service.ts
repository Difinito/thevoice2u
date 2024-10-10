import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { DailyAffirmationDto } from '../dto/dailyaffirmation.dto';

@Injectable()
export class DailyAffirmationService {
  constructor(private prismaService: PrismaService) {}

  async getAffirmationById(id: string) {
    const yearsQuestionsOptions = await this.prismaService.post.findUnique({
      where: {
        id: id,
      },
    });
    return yearsQuestionsOptions;
  }

  async getAllDailyAffirmation() {
    const allPost = await this.prismaService.post.findMany({});
    return allPost;
  }

  async createDailyAffirmation(post: DailyAffirmationDto) {
    const newPost = await this.prismaService.dailyAffirmation.create({
      data: {
        adminId: post.adminId,
        dailyReading: post.dailyReading,
        memorise: post.memorise,
        message: post.message,
        prayer: post.prayer,
        propheticDeclaration: post.propheticDeclaration,
        quote: post.quote,
        topic: post.topic,
        page: {
          connect: {
            id: post.pageId,
          },
        },
      },
    });

    return newPost;
  }
}
