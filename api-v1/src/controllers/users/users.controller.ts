import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import type { User } from "src/services/user/models/user";
import { UserService } from "src/services/user/user.service";

import * as InputDto from "./dto/input.dto";

@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async CreateUser(@Body() inputDto: InputDto.CreateUser) {
    const user = await this.userService.CreateUser(inputDto);
    /** TODO: outputDto */
    return user;
  }

  @Get()
  async getUsers(): Promise<User[]> {
    const users = await this.userService.SearchUsers({});
    /** TODO: outputDto */
    return users;
  }

  @Get(":userId")
  async findOne(@Param("userId") userId: string) {
    const user = this.userService.GetUser({ discriminator: "id", id: userId });
    /** TODO: outputDto */
    return user;
  }

  @Put(":userId")
  async update(
    @Param("userId") userId: string,
    @Body() inputDto: InputDto.UpdateUser,
  ) {
    const user = this.userService.UpdateUser({ id: userId, ...inputDto });
    /** TODO: outputDto */
    return user;
  }

  @Delete(":userId")
  async remove(@Param("userId") userId: string) {
    const user = this.userService.DeleteUser({ id: userId });
    /** TODO: outputDto */
    return user;
  }
}
