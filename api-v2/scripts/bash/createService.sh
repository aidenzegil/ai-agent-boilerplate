#!/bin/bash

function capitalize_service_name() {
  CAP_SERVICE_NAME=$(tr '[:lower:]' '[:upper:]' <<<"${SERVICE_NAME:0:1}")${SERVICE_NAME:1}
  echo "GLOBAL_SERVICE_NAME: $CAP_SERVICE_NAME"
}

function create_interface() {
  # #region
  cat >src/$SERVICE_TYPE/"$SERVICE_NAME"/api.interface.ts <<EOF
/**
 * ${CAP_SERVICE_NAME}Service API.
 */
export interface ${CAP_SERVICE_NAME}Api {
  // CreateUser: (params: params.CreateUser) => Promise<User>;
};
EOF

  cat >src/$SERVICE_TYPE/"$SERVICE_NAME"/api.params.ts <<EOF
/**
 * ${CAP_SERVICE_NAME}Service input params.
 */
export namespace params {
  // export type CreateUser = {
  //   firebaseId: string;
  //   username: string;
  // };
};
EOF
  # #endregion
}

function create_models() {
  # #region
  mkdir -p src/$SERVICE_TYPE/"$SERVICE_NAME"/models
  cat >src/$SERVICE_TYPE/"$SERVICE_NAME"/models/"$SERVICE_NAME".ts <<EOF
/**
 * The core data model for the ${CAP_SERVICE_NAME}Service.
 */
export type $CAP_SERVICE_NAME = {
  id: string;
  // ...
};
EOF
  # #endregion
}

function create_repository() {
  # #region
  mkdir -p src/domain/"$SERVICE_NAME"/repository
  cat >src/domain/"$SERVICE_NAME"/repository/command.ts <<EOF
/**
 * A composed object for ${CAP_SERVICE_NAME}Service database write functions.
 */
export const command = {
  // deleteUser: async (params: params.DeleteUser): Promise<DBUser> => {
  //   const user = await wetDBClient.user.delete({
  //     where: { id: params.id },
  //     ...typesafeUser,
  //   });

  //   return user;
  // },
};
EOF

  cat >src/domain/"$SERVICE_NAME"/repository/query.ts <<EOF
/**
 * A composed object for ${CAP_SERVICE_NAME}Service database read functions.
 */
export const query = {
  // getUserById: async (id: string): Promise<DBUser | null> => {
  //   const user = await wetDBClient.user.findUnique({
  //     where: { id },
  //     ...typesafeUser,
  //   });
  //   return user;
  // },
};
EOF

  cat >src/domain/"$SERVICE_NAME"/repository/"$SERVICE_NAME".ts <<EOF
/**
 * This file contains typing for ${CAP_SERVICE_NAME}Service database models.
 */

import { Prisma } from "@prisma/client";

/**
 * Spread this object in the prisma call to specify what tables 
 * should be included in the aggregate.
 */
export const typesafe${CAP_SERVICE_NAME} = Prisma.validator<Prisma.${CAP_SERVICE_NAME}DefaultArgs>()({
  // include: {},
});

/**
 * The type of the $CAP_SERVICE_NAME aggregate returned from the database.
 */
export type DB${CAP_SERVICE_NAME} = Prisma.${CAP_SERVICE_NAME}GetPayload<typeof typesafe${CAP_SERVICE_NAME}>;
EOF
  # #endregion
}

function create_transform_file() {
  # #region
  cat >src/$SERVICE_TYPE/"$SERVICE_NAME"/transform.ts <<EOF
/**
 * A composed object for ${CAP_SERVICE_NAME}Service transform functions.
 */
export const transform = {
  // user: (source: DBUser): User => {
  //   return {
  //     email: source.email,
  //     firebaseId: source.firebaseId,
  //     id: source.id,
  //     profilePictureUrl: source.profilePictureUrl,
  //     username: source.username,
  //   };
  // },
};
EOF
  # #endregion
}

function update_domain_service() {
  # #region
  cat >src/$SERVICE_TYPE/"$SERVICE_NAME"/"$SERVICE_NAME".service.ts <<EOF
import { Injectable } from "@nestjs/common";
import { command } from "./repository/command";
import { query } from "./repository/query";
import { transform } from "./transform";
import type { ${CAP_SERVICE_NAME}Api } from "./api.interface";
import type { params } from "./api.params";
import type { $CAP_SERVICE_NAME } from "./models/$SERVICE_NAME";

@Injectable()
export class ${CAP_SERVICE_NAME}Service implements ${CAP_SERVICE_NAME}Api {}
EOF
  # #endregion
}

function update_application_service() {
  # #region
  cat >src/$SERVICE_TYPE/"$SERVICE_NAME"/"$SERVICE_NAME".service.ts <<EOF
import { Injectable } from "@nestjs/common";
import { transform } from "./transform";
import type { ${CAP_SERVICE_NAME}Api } from "./api.interface";
import type { params } from "./api.params";
import type { $CAP_SERVICE_NAME } from "./models/$SERVICE_NAME";

@Injectable()
export class ${CAP_SERVICE_NAME}Service implements ${CAP_SERVICE_NAME}Api {}
EOF
  # #endregion
}

function create_domain() {
  echo "Whats the name of the service?"
  read -r -e -p "Name = " name_var
  SERVICE_TYPE="domain"
  SERVICE_NAME=$name_var
  capitalize_service_name

  nest g service "$SERVICE_NAME" domain

  create_interface
  create_transform_file
  create_repository
  create_models
  update_domain_service
}

function create_application() {
  echo "Whats the name of the service?"
  read -r -e -p "Name = " name_var
  SERVICE_TYPE="domain"
  SERVICE_NAME=$name_var
  capitalize_service_name

  nest g service "$SERVICE_NAME" application

  create_interface
  create_transform_file
  create_models
  update_application_service
}

##
# Color  Variables
##
red="\033[31m"
green="\033[32m"
blue="\033[34m"
clear="\033[0m"

##
# Color Functions
##

ColorRed() {
  echo -ne "$red""$1""$clear"
}
ColorGreen() {
  echo -ne "$green""$1""$clear"
}
ColorBlue() {
  echo -ne "$blue""$1""$clear"
}

menu() {
  echo -ne "
Select a service type to create:
$(ColorGreen '1)') Domain Service
$(ColorGreen '2)') Application Service
$(ColorGreen '0)') Exit
$(ColorBlue 'Choose an option:') "
  read -r a
  case $a in
  1)
    clear
    create_domain
    menu
    ;;
  2)
    clear
    create_application
    menu
    ;;
  0) exit 0 ;;
  *)
    clear
    invalid_option
    menu
    ;;
  esac
}

# Reset global variables
SERVICE_TYPE=""
SERVICE_NAME=""
CAP_SERVICE_NAME=""

# Call the menu function
menu
