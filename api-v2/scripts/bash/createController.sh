#!/bin/bash

function capitalize_controller_name() {
  CAP_NAME=$(tr '[:lower:]' '[:upper:]' <<<"${CONTROLLER_NAME:0:1}")${CONTROLLER_NAME:1}
  echo "GLOBAL_CONTROLLER_NAME: $CAP_NAME"
}

function create_dtos() {
  # #region
  mkdir -p src/controllers/$CONTROLLER_NAME/dto

  cat >src/controllers/$CONTROLLER_NAME/dto/input.dto.ts <<EOF
/**
 * This file contains the input DTOs for the ${CAP_NAME}Controller
 * Each DTO should belong to only one endpoint and have Swagger validation decorators
 */

// export class CreateUser {
//   @IsApiEmail()
//     email!: string;
//   @IsApiString()
//     firebaseId!: string;
//   @IsApiUrl()
//     profilePictureUrl!: string;
//   @IsApiString()
//     username!: string;
// }
EOF

  cat >src/controllers/$CONTROLLER_NAME/dto/output.dto.ts <<EOF
/**
 * This file contains the output DTOs for the ${CAP_NAME}Controller
 * Each output DTO should be a class that is constructed from service model
 */

// export class UserOutputDto {
//   email: string;
//   id: string;
//   profilePictureUrl: string | null;
//   username: string;

//   constructor(user: User) {
//     this.email = user.email;
//     this.id = user.id;
//     this.profilePictureUrl = user.profilePictureUrl;
//     this.username = user.username;
//   }
// }
EOF
  # #endregion
}

function update_controller() {
  # #region
  cat >src/controllers/$CONTROLLER_NAME/$CONTROLLER_NAME.controller.ts <<EOF
import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("$CONTROLLER_NAME")
@Controller("$CONTROLLER_NAME")
export class ${CAP_NAME}Controller {}
EOF
  # #endregion
}

CAP_NAME=""

echo "Whats the name of the controller?"
read -r -e -p "Name = " name_var
export CONTROLLER_NAME=$name_var
capitalize_controller_name

nest g controller $CONTROLLER_NAME controllers

create_dtos

update_controller
