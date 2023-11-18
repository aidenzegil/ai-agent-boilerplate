import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /** Validation Middleware */
  app.useGlobalPipes(new ValidationPipe());
  /** Open API documentation */
  const config = new DocumentBuilder()
    .setTitle('Wetpages API')
    .setDescription('The main API for Wetpages')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  /** End Open API documentation  */

  await app.listen(3001);
}
bootstrap();
