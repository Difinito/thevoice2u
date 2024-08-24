import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://thevoice2u_user:5bTMzFu1fsnD436C9p2dI91c1QHglmqp@dpg-cr4sd9tumphs73dsgrfg-a.oregon-postgres.render.com/thevoice2u',
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
