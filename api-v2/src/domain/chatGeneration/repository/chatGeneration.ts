/**
 * This file contains typing for ChatGenerationService database models.
 */

import { Prisma } from "@prisma/client";

/**
 * Spread this object in the prisma call to specify what tables 
 * should be included in the aggregate.
 */
export const typesafeChatGeneration = Prisma.validator<Prisma.ChatGenerationDefaultArgs>()({
  // include: {},
});

/**
 * The type of the ChatGeneration aggregate returned from the database.
 */
export type DBChatGeneration = Prisma.ChatGenerationGetPayload<typeof typesafeChatGeneration>;
