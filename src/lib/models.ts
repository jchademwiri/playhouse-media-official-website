'use client';
import z from 'zod';

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

type RegisterForm = z.infer<typeof RegisterFormSchema>;

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

type LoginForm = z.infer<typeof LoginFormSchema>;

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email().min(2, {
    message: 'Email must be at least 2 characters.',
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

type ContactForm = z.infer<typeof contactFormSchema>;

export { RegisterFormSchema, LoginFormSchema, contactFormSchema };

export type { RegisterForm, LoginForm, ContactForm };
