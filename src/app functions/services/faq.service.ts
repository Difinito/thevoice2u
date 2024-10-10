import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { FaqDto } from '../dto/faq.dto';

@Injectable()
export class FaqService {
  constructor(private prismaService: PrismaService) {}

  async getFaqById(id: string) {
    const yearsQuestionsOptions = await this.prismaService.post.findUnique({
      where: {
        id: id,
      },
    });
    return yearsQuestionsOptions;
  }

  async getAllFaq() {
    const allPost = await this.prismaService.post.findMany({});
    return allPost;
  }

  async createFaq(post: FaqDto) {
    const newPost = await this.prismaService.faq.create({
      data: {
        answer: post.answer,
        writeUp: post.question,
      },
    });

    return newPost;
  }
}
