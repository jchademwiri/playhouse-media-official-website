'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { toast } from '../ui/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { ContactForm, contactFormSchema } from '@/lib/models';
import { useState } from 'react';

const ContactForm = () => {
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. Define a submit handler.
  async function onSubmit(data: ContactForm) {
    setIsSubmitting(true);
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message,
      }),
    });

    if (response.ok) {
      setIsSubmitting(false);
      toast({
        title: `Thank you ${data.name} for Contacting us,`,
        description: (
          <div>
            <pre className='mt-2 w-[340px] rounded-md bg-secondary p-4'>
              <p>
                Name:
                <code>{JSON.stringify(data.name, null, 2)}</code>
              </p>
              <p>
                Phone Number:
                <code>{JSON.stringify(data.phone, null, 2)}</code>
              </p>
              <p>
                Email:
                <code>{JSON.stringify(data.email, null, 2)}</code>
              </p>
            </pre>
            <p className='py-2'>We will get back to you as soon as possible.</p>
          </div>
        ),
      });
      form.reset();
    } else {
      setIsSubmitting(false);
      setError('An unexpected error ocured');
      console.log(error);
      toast({
        title: 'Error',
        description: `${error}`,
        variant: 'destructive',
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Name...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder='Phone Number...' type='number' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='Email...' type='email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Talk about your website project. Any requirements, ideas, goals, or examples to get the discussion started.'
                  className='resize-none min-h-[120px]'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className='w-full' type='submit'>
          Submit
        </Button>
      </form>
    </Form>
  );
};
export default ContactForm;
