import { server } from '@/config';
import prisma from '@/prisma/client';

// export async function getMessages() {
//   const res = await fetch(`${server}/api/messages`, {
//     next: { revalidate: 10 },
//   });

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// }

// =====================================>

// export async function getMessages() {
//   try {
//     await prisma.message.findMany({
//       orderBy: {
//         createdAt: 'desc',
//       },
//     });
//   } catch (error) {
//     throw new Error('Failed to fetch data');
//   }
// }
const messages = await prisma.message.findMany({
  orderBy: {
    createdAt: 'desc',
  },
});
const messageCount = await prisma.message.count();

export { messageCount, messages };
