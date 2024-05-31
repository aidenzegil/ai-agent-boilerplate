import { PrismaClient } from "@prisma/client";

export const dbClient = new PrismaClient();

// Middleware is not active in the test environment

/**
 * THE ORDER OF THE MIDDLEWARE MATTERS!
 */
