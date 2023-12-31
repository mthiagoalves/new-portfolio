import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
  });

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
  .setTitle('Portfolio')
  .setDescription('Application maked for build my portfolio')
  .setVersion('1.0.0')
  .addTag('Status')
  .addTag('Auth')
  .addTag('Users')
  .addTag('Projects')
  .addTag('Technologies')
  .addBearerAuth()
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3454);
}
bootstrap();
