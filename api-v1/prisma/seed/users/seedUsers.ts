import type { PrismaClient, User } from "@prisma/client";

const users = [
  {
    firstName: "jake",
    lastName: "zegil",
    title: "engineering",
  },
  {
    firstName: "jordon",
    lastName: "waters",
    title: "engineering",
  },
  {
    firstName: "aiden",
    lastName: "zegil",
    title: "engineering",
  },
];

const seed = async (prismaClient: PrismaClient): Promise<User[]> => {
  console.log("Seeding users");
  const dbUsers = await Promise.all(
    users.map(async (user) => {
      const username = `${user.firstName}_${user.lastName}`;
      const email = `${user.firstName}@wetpages.com`;
      return prismaClient.user.upsert({
        create: {
          email,
          username,
        },
        update: {
          email,
          username,
        },
        where: {
          username,
        },
      });
    }),
  );

  return dbUsers;
};

export default seed;
