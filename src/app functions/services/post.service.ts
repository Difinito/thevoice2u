import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostDto } from '../dto/post.dto';

@Injectable()
export class PostService {
  constructor(private prismaService: PrismaService) {}

  async getFeedById(id: string) {
    const yearsQuestionsOptions = await this.prismaService.post.findUnique({
      where: {
        id: id,
      },
    });
    return yearsQuestionsOptions;
  }

  async getAllPost() {
    const allPost = await this.prismaService.post.findMany({
      include: {
        author: true,
      },
    });
    return allPost;
  }

  async createFeed(post: PostDto) {
    const newPost = await this.prismaService.post.create({
      data: {
        category: post.category,
        comments: post.comments,
        likes: post.likes,
        description: post.description,
        images: post.images,
        published: post.published,
        author: {
          connect: {
            id: post.userId,
          },
        },
      },
    });

    return newPost;
  }
}
