import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.enableCors({
    origin: ['http://localhost:8000'],
    credentials: true,
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('YOUR_SWAGGER_TITLE')
    .setDescription('YOUR_SWAGGER_DESCRIPTION')
    .setVersion('1.0')
    .addTag('YOUR_TAG')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
