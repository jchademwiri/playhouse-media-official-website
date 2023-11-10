import prisma from '@/prisma/client';
import { NextResponse } from 'next/server';

export async function GET() {
  const messages = await prisma.message.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return new NextResponse(JSON.stringify(messages), {
    status: 200,
  });
}
