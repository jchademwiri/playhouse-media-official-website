import z from 'zod';



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

export {  contactFormSchema };

export type { ContactForm };
