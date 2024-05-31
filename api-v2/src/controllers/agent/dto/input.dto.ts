/**
 * This file contains the input DTOs for the UsersController
 * Each DTO should belong to only one endpoint and have Swagger validation decorators
 */

import { IsApiString } from "$controllers/decorators/validation";

export class CreateChatGeneration {
  @IsApiString()
  message!: string;
}
