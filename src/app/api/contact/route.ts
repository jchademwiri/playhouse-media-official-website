import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import z from 'zod';
import * as React from 'react';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailTemplateProps {
  name: string;
  phone: number;
  email: string;
  message: string;
}

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const contactFormSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required.',
  }),
  phone: z
    .string()
    .regex(phoneRegex, 'Invalid Phone Number!')
    .min(10, { message: 'Phone number must be at least 10 numbers' })
    .max(14, {
      message: 'Phone number must be at most 14 numbers with country code',
    }),
  email: z.string().email().min(1, {
    message: 'Email is required.',
  }),
  message: z
    .string()
    .min(10, {
      message: 'Message must be at least 10 characters.',
    })
    .max(300, {
      message: 'Message must not be longer than 300 characters.',
    }),
});

// create an inteface fro zod validation

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = contactFormSchema.parse(body);

    const newMessage = await prisma.message.create({
      data: {
        name,
        phone,
        email,
        message,
      },
    });

    const sendMessage = await resend.emails.send({
      from: 'PMG Team <info@playhousemedia.net>',
      to: email,
      subject: 'This is Jacob from PMG',
      react: EmailTemplate({
        name,
        phone,
        email,
        message,
      }) as React.ReactElement,
    });

    return NextResponse.json(
      {
        newMessage,
        sendMessage,
        message: 'Message sent successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
