import { RegisterForm, RegisterFormSchema } from '@/lib/models';
import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log('first');
  const body = await request.json();
  const validation = RegisterFormSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const newUser = await prisma.user.create({
    data: {
      fullname: body.fullname,
      email: body.email,
      password: body.password,
    },
  });
  return NextResponse.json(newUser, { status: 201 });
}

export async function GET() {
  const users = await prisma.user.findMany();
  return new NextResponse(JSON.stringify(users), { status: 200 });
}
