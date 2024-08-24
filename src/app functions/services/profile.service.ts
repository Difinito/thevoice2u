import { Injectable } from '@nestjs/common';
import { ProfileDto } from '../../user/dto/profile.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private prismaService: PrismaService) {}

  async getProifleById(id: string) {
    const yearsQuestionsOptions = await this.prismaService.post.findUnique({
      where: {
        id: id,
      },
    });
    return yearsQuestionsOptions;
  }

  async createProfile(post: ProfileDto) {
    const newPost = await this.prismaService.profile.create({
      data: {
        country: post.country,
        aboutYourself: post.aboutYourself,
        backgroundImage: post.backgroundImage,
        church: post.church,
        gender: post.gender,
        username: post.username,
        isOnline: post.isOnline,
        number: post.number,
        urlAvatar: post.urlAvatar,
        relationship: post.relationship,
        friends: post.friends,
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
