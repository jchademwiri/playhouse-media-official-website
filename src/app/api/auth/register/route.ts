import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { hash } from 'bcrypt';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullname, email, password } = body;

    const existingUserByEmail = await prisma.user.findUnique({
      where: { email },
    });

    // check if user exists

    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: 'Email already exists' },
        { status: 409 }
      );
    }
    const hashedPassword = await hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email,
        fullname,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        Newuser: newUser,
        message: 'New User has been created successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function GET() {
  const users = await prisma.user.findMany();
  return new NextResponse(JSON.stringify(users), { status: 200 });
}
