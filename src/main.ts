import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.enableCors({
    origin: [
      'http://localhost:8000',
      'http://localhost:3000',
      'http://3.35.156.67:3000',
      'https://chamroro.github.io',
    ],
    credentials: true,
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Pateran Backend API')
    .setDescription('YOUR_SWAGGER_DESCRIPTION')
    .setVersion('1.0')
    .addTag('YOUR_TAG')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(4000);
}
bootstrap();
