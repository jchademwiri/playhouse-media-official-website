'use client';
import * as z from 'zod';

const RegisterFormSchema = z.object({
  fullname: z.string().min(3, {
    message: 'Fullname must be at least 3 characters.',
  }),
  email: z
    .string()
    .min(3, {
      message: 'email must be at least 3 characters.',
    })
    .email(),
  password: z.string().min(5, {
    message: 'Username must be at least 5 characters.',
  }),
});

const LoginFormSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'email is required.',
    })
    .email(),
  password: z.string().min(1, {
    message: 'Password is required.',
  }),
});

export { RegisterFormSchema, LoginFormSchema };
