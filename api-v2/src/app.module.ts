import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";

import { AuthenticationMiddleware } from "$controllers/middleware/authentication.middleware";
import { AuthorizationMiddleware } from "$controllers/middleware/authorization.middleware";
import { LoggerMiddleware } from "$controllers/middleware/logger.middleware";
import { RequireAuthentication } from "$controllers/middleware/requireAuthentication.middleware";
import { RequireAuthorization } from "$controllers/middleware/requireAuthorization.middleware";
import { AuthenticationService } from "$external/authentication/authentication.service";

import { AppService } from "./application/app.service";
import { AppController } from "./controllers/app.controller";
import { TestController } from "./controllers/test/test.controller";
import { UsersController } from "./controllers/users/users.controller";
import { UserService } from "./domain/user/user.service";

@Module({
  controllers: [AppController, UsersController, TestController],
  imports: [],
  providers: [AuthenticationService, AppService, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    /**
     * * Global Middleware *
     * Auth goes first so it can be used by the logger
     */
    consumer.apply(AuthenticationMiddleware, AuthorizationMiddleware, LoggerMiddleware).forRoutes("*");
    /**
     * * Authentication (login) Required *
     * Routes listed here will error if not logged in
     */
    consumer
      .apply(RequireAuthentication)
      .forRoutes({ method: RequestMethod.POST, path: "users" });
    /**
     * * Authorization Required *
     * Routes listed here require the user's authenticated ID
     * to be the same as the userId in the path
     */
    consumer.apply(RequireAuthorization).forRoutes("users/:userId");
  }
}
