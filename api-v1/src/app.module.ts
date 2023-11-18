import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './controllers/app.controller';
import { UsersController } from './controllers/users/users.controller';
import { StoriesController } from './controllers/stories/stories.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, StoriesController],
  providers: [AppService],
})
export class AppModule {}
