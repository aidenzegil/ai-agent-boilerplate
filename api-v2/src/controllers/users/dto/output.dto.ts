/**
 * This file contains the output DTOs for the UsersController
 * Each output DTO should be a class that is constructed from service model
 */

import type { User } from "$domain/user/models/user";

export class UserOutputDto {
  email: string | null;
  id: string;
  phoneNumber: string;

  constructor(user: User) {
    this.email = user.email;
    this.id = user.id;
    this.phoneNumber = user.phoneNumber;
  }
}
