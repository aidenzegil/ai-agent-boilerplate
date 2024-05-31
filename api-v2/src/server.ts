import type { INestApplication } from "@nestjs/common";
import { ValidationPipe } from "@nestjs/common";
import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { ApplicationErrorFilter } from "$controllers/filters/applicationError.filter";
import { BadRequestExceptionFilter } from "$controllers/filters/badRequestException.filter";
import { PrismaExceptionsFilter } from "$controllers/filters/prismaException.filter";
import { AllExceptionsFilter } from "$controllers/filters/safetyNet.filter";
import { stash } from "$controllers/middleware/stash.middleware";

import { AppModule } from "./app.module";


export async function prepServer(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);
  /** Middleware to stash data on the request */
  app.use(stash);

  /** Validation Middleware */
  app.useGlobalPipes(new ValidationPipe());

  /** Open API documentation */
  const config = new DocumentBuilder()
    .setTitle("Wetpages API")
    .setDescription("The main API for Wetpages")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  /** End Open API documentation  */

  /** Error Handling */
  const host = app.get(HttpAdapterHost);

  /** More specific handlers go towards the bottom */
  app.useGlobalFilters(
    new AllExceptionsFilter(host),
    new PrismaExceptionsFilter(),
    new ApplicationErrorFilter(),
    new BadRequestExceptionFilter()
  );

  return app;
}
