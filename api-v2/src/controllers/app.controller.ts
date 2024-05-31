import { Body, Controller, Get } from "@nestjs/common";

import { Stash } from "$controllers/decorators/stash";
import { DataStash } from "$controllers/types/request.dto";
import { isProduction } from "$util/environment";
import { deep } from "$util/logging/deepLog";

import { AppService } from "../application/app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Body() body: unknown, @Stash() stash: DataStash): string {
    console.log("Hello from AppController");

    if(!isProduction()){
      deep.log({ body, stash });
    }

    return this.appService.getHello();
  }
}
