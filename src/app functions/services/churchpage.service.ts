import { Injectable } from '@nestjs/common';

import { ChurchPageDto } from '../dto/churchpage.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ChurchPageService {
  constructor(private prismaService: PrismaService) {}

  async getChurchPageById(id: string) {
    const churchPage = await this.prismaService.churchPage.findUnique({
      where: {
        id: id,
      },
    });
    return churchPage;
  }

  async getAllChurch() {
    const churchPage = await this.prismaService.churchPage.findMany({});
    return churchPage;
  }

  async createChurch(churchPage: ChurchPageDto) {
    const newChurchPage = await this.prismaService.churchPage.create({
      data: {
        pageName: churchPage.pageName,
        aboutPage: churchPage.aboutPage,
        published: churchPage.published,
        backgroundImage: churchPage.backgroundImage,
        pageverified: churchPage.pageverified,
        pageImage: churchPage.pageImage,
        webstrings: churchPage.webstrings,
        desciples: churchPage.desciples,
        user: {
          connect: {
            id: churchPage.adminId,
          },
        },
      },
    });

    return newChurchPage;
  }
}
