import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('The Voice 2 You API')
    .setDescription('This Api is for TV2U application')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  //   const port = configService.get<number>('PORT') || 3000;
  // await app.listen(port);
  // const port = process.env.DB_PORT || 3000;

  await app.listen(process.env.DATABASE_URL || 3000);
}
bootstrap();
