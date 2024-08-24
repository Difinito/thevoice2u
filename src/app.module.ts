import { Module } from '@nestjs/common';
import { AuthModule } from './user/auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core/constants';
import { AtGuard } from './user/auth/at.guard';
import pool from './pool';
import { PrismaClientExceptionFilter } from './prisma-client-exception.filter';
// import pool from './pool';

@Module({
  imports: [AuthModule, PrismaModule],

  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
  ],
})
export class AppModule {}
