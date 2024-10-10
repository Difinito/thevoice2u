import { Injectable } from '@nestjs/common';

import { PostDto } from '../dto/post.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { CounsellorsDto } from '../dto/counsellors.dto';

@Injectable()
export class CounsellorsService {
  constructor(private prismaService: PrismaService) {}

  async getCounsellorsById(id: string) {
    const yearsQuestionsOptions = await this.prismaService.post.findUnique({
      where: {
        id: id,
      },
    });
    return yearsQuestionsOptions;
  }

  async getAllCounsellors() {
    const allPost = await this.prismaService.post.findMany({
      include: {
        author: true,
      },
    });
    return allPost;
  }

  async createCounsellors(post: CounsellorsDto) {
    const newPost = await this.prismaService.counsellors.create({
      data: {
        about: post.about,
        followers: post.followers,
        tag: post.tag,
        user: {
          connect: {
            id: post.userId,
          },
        },
      },
    });

    return newPost;
  }
}
