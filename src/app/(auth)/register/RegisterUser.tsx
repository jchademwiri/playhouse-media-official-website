'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { RegisterForm, RegisterFormSchema } from '@/lib/models';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/Spinner';

export function RegisterUser() {
  const router = useRouter();

  const form = useForm<RegisterForm>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(data: RegisterForm) {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullname: data.fullname,
          email: data.email,
          password: data.password,
        }),
      });
      if (response.ok) {
        setIsSubmitting(true);
        toast({
          title: `Thank you ${data.fullname} for registering`,
          description: (
            <pre className='mt-2 w-[340px] rounded-md bg-secondary p-4'>
              <div>
                <code>
                  {JSON.stringify('Form submited Successfully', null, 2)}
                </code>
              </div>
            </pre>
          ),
        });
        router.push('/login');
      }
    } catch (error) {
      setIsSubmitting(false);
      setError('An unexpected error ocured');
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <section className='w-[90%] sm:max-w-sm mx-auto border border-secondary rounded-sm p-4'>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='fullname'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder='Full Name' {...field} />
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
                  <Input placeholder='email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder='password' type='password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder='confirmPassword'
                    type='password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='my-2 gap-2 flex justify-between items-center'>
            <Button type='submit' disabled={isSubmitting}>
              Register {isSubmitting && <Spinner />}
            </Button>
            <small>
              Already have an account?{' '}
              <Link href='/login' className='text-primary font-medium'>
                Login
              </Link>
            </small>
          </div>
        </form>
      </section>
    </Form>
  );
}
