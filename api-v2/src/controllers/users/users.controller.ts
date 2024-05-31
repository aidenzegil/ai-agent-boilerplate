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

import { BadRequestError } from "$common/errors/BadRequestError";
import { Stash } from "$controllers/decorators/stash";
import { AuthenticatedStash } from "$controllers/types/request.dto";
import { ApiResponse } from "$controllers/types/response.dto";
import { UserService } from "$domain/user/user.service";

import * as InputDto from "./dto/input.dto";
import { UserOutputDto } from "./dto/output.dto";

@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async CreateUser(
    @Body() inputDto: InputDto.CreateUser,
    @Stash() stash: AuthenticatedStash
  ): ApiResponse<UserOutputDto> {
    /** This is attached by auth middleware */
    const authUser = stash.auth;
    /** Validate that the phoneNumber matches */
    const isPhoneMatch = inputDto.phoneNumber === authUser.phoneNumber;
    if (!isPhoneMatch) {
      throw new BadRequestError({
        message: "phone number does not match the one used for auth",
      });
    }
    /** Create the user */
    const user = await this.userService.CreateUser({
      email: inputDto.email,
      firebaseId: authUser.firebaseId,
      phoneNumber: inputDto.phoneNumber,
    });
    /** Construct the output dto */
    const dto = new UserOutputDto(user);
    /** Return the dto as an ApiResponse */
    return { data: dto };
  }

  /**
   * ! This does NOT delete the firebase user. Only the user in the database.
   */
  @Delete(":userId")
  async Delete(@Param("userId") userId: string): ApiResponse<UserOutputDto> {
    const user = await this.userService.DeleteUser({ id: userId });
    const dto = new UserOutputDto(user);
    return { data: dto };
  }

  @Get(":userId")
  async GetUser(@Param("userId") userId: string): ApiResponse<UserOutputDto> {
    const user = await this.userService.GetUser({
      discriminator: "id",
      id: userId,
    });
    const dto = new UserOutputDto(user);
    return { data: dto };
  }

  @Get()
  async GetUsers(): ApiResponse<UserOutputDto[]> {
    const users = await this.userService.SearchUsers({});
    const dto = users.map((user) => new UserOutputDto(user));
    return { data: dto };
  }

  @Put(":userId")
  async Update(
    @Param("userId") userId: string,
    @Body() inputDto: InputDto.UpdateUser
  ): ApiResponse<UserOutputDto> {
    const user = await this.userService.UpdateUser({ id: userId, ...inputDto });
    const dto = new UserOutputDto(user);
    return { data: dto };
  }
}
