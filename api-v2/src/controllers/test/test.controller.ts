/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/require-await */
import { Body, Controller, Post } from "@nestjs/common";

import { ApiResponse } from "$controllers/types/response.dto";

import * as InputDto from "./dto/input.dto";


@Controller("test")
export class TestController {
  @Post()
  async TestPost(
    @Body() inputDto: InputDto.TestPost
  ): ApiResponse<any> {
    console.log({ inputDto });

    return { data: inputDto };
  }
}
