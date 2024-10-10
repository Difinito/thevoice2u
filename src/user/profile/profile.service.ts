import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { ProfileDto } from './profile.dto';

@Injectable()
export class ProfileService {
  constructor(private prismaService: PrismaService) {}

  async getAllProfiles() {
    const allUsers = await this.prismaService.profile.findMany({});
    return allUsers;
  }

  async getProifleById(id: string) {
    const yearsQuestionsOptions = await this.prismaService.profile.findUnique({
      where: {
        userId: id,
      },
    });
    return yearsQuestionsOptions;
  }

  async updateProfile(id: string, profileData: ProfileDto) {
    await this.prismaService.profile.update({
      where: {
        id: id,
      },
      data: {
        country: profileData.country,
        username: profileData.username,
        user: {
          connect: {
            id: profileData.userId,
          },
        },
      },
    });
  }

  async createProfile(post: ProfileDto) {
    const profile = await this.prismaService.profile.create({
      data: {
        aboutYourself: post.aboutYourself,
        isOnline: post.isOnline,
        number: post.number,
        friends: post.friends,
        church: post.church,
        country: post.country,
        relationship: post.relationship,
        backgroundImage: post.backgroundImage,
        username: post.username,
        gender: post.gender,
        urlAvatar: post.urlAvatar,
        verified: post.verified,
        user: {
          connect: { id: post.userId },
        },
      },
    });

    return profile;
  }
}
