import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

import { GroupDto } from '../dto/group.dto';

@Injectable()
export class GroupService {
  constructor(private prismaService: PrismaService) {}

  async getGroupById(id: string) {
    const yearsQuestionsOptions = await this.prismaService.post.findUnique({
      where: {
        id: id,
      },
    });
    return yearsQuestionsOptions;
  }

  async getAllGroup() {
    const allPost = await this.prismaService.post.findMany({});
    return allPost;
  }

  async createGroup(post: GroupDto) {
    const newPost = await this.prismaService.groupFamily.create({
      data: {
        groupAbout: post.groupAbout,
        groupName: post.groupName,
        urlImage: post.urlImage,
        familyMembers: post.familyMembers,
        rules: post.rules,

        user: {
          connect: {
            id: post.userId,
          },
        },
      },
    });

    return newPost;
  }

  async postGroup(post: GroupDto) {
    const newPost = await this.prismaService.groupFamily.create({
      data: {
        groupAbout: post.groupAbout,
        groupName: post.groupName,
        urlImage: post.urlImage,
        familyMembers: post.familyMembers,
        rules: post.rules,

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
