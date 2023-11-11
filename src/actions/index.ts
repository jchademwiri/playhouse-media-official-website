import prisma from '@/prisma/client';
const messages = await prisma.message.findMany({
  orderBy: {
    createdAt: 'desc',
  },
});
const messageCount = await prisma.message.count();

export { messageCount, messages };
