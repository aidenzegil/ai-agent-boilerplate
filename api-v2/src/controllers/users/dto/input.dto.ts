/**
 * This file contains the input DTOs for the UsersController
 * Each DTO should belong to only one endpoint and have Swagger validation decorators
 */

import { IsApiEmail, IsApiString } from "$controllers/decorators/validation";

export class CreateUser {
  @IsApiEmail({ optional: true })
    email?: string;
  @IsApiString()
    phoneNumber!: string;
}

export class UpdateUser {
  @IsApiEmail({ optional: true })
    email?: string;
  @IsApiString({ optional: true })
    phoneNumber?: string;
}
