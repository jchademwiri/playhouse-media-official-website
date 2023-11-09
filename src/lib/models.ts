import z from 'zod';

const RegisterFormSchema = z
  .object({
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
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',
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

type ContactForm = z.infer<typeof contactFormSchema>;

export { RegisterFormSchema, LoginFormSchema, contactFormSchema };

export type { RegisterForm, LoginForm, ContactForm };
