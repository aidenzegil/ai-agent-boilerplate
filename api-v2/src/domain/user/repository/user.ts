/**
 * This file contains typing for UserService database models.
 */

import { Prisma } from "@prisma/client";

/**
 * Spread this object in the prisma call to specify what tables
 * should be included in the aggregate.
 */
export const typesafeUser = Prisma.validator<Prisma.UserDefaultArgs>()({
  // include: {},
});

/**
 * The type of the User aggregate returned from the database.
 */
export type DBUser = Prisma.UserGetPayload<typeof typesafeUser>;
