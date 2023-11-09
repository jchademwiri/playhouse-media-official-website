import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import z from 'zod';

const RegisterFormSchema = z.object({
  fullname: z
    .string()
    .min(1, {
      message: 'Fullname is required.',
    })
    .max(100),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have than 8 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullname, email, password } = RegisterFormSchema.parse(body);

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

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      {
        Newuser: rest,
        message: 'New User has been created successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
