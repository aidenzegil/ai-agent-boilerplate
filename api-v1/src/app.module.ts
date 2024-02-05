import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { ChapterService } from "domain/chapter/chapter.service";
import { StoryService } from "domain/story/story.service";
import { LiteratureService } from "orchestration/literature/service";

import { AppController } from "./controllers/app.controller";
import { StoriesController } from "./controllers/stories/stories.controller";
import { UsersController } from "./controllers/users/users.controller";
import { AppService } from "./services/app.service";
import { UserService } from "./services/domain/user/user.service";
import { LoggerMiddleware } from "#controllers/middleware/requestLogger";
import { PreauthMiddleware } from "#controllers/middleware/Auth/PreAuthMiddleware";
import { authenticatedRoutes } from "#configs/authenticatedRoutes";
import { FirebaseApp } from "#lib/firebaseCLient";

@Module({
  controllers: [AppController, UsersController, StoriesController],
  imports: [],
  providers: [
    AppService,
    ChapterService,
    StoryService,
    LiteratureService,
    UserService,
    FirebaseApp,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: "*", method: RequestMethod.ALL });
    consumer.apply(PreauthMiddleware).forRoutes(...authenticatedRoutes);
  }
}
