/**
 * This file contains the input DTOs for the TestController
 * Each DTO should belong to only one endpoint and have Swagger validation decorators
 */


import { IsApiEmail } from "$controllers/decorators/validation";

export class TestPost {
  @IsApiEmail()
    email!: string;
  // @IsEmail()
  //   firebaseId!: string;
}
