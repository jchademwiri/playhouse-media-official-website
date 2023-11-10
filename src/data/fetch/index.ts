import { server } from '@/config';
import prisma from '@/prisma/client';

export async function getMessages() {
  const res = await fetch(`${server}/api/messages`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export const messageCount = await prisma.message.count();
