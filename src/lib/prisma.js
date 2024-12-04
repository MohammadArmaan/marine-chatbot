import { PrismaClient } from '@prisma/client';

let prisma;

const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Ensure we don't create multiple Prisma Client instances in development
if (process.env.NODE_ENV !== 'production') {
  if (!global.prisma) {
    global.prisma = prismaClientSingleton();
  }
  prisma = global.prisma;
} else {
  prisma = prismaClientSingleton();
}

module.exports = prisma;
