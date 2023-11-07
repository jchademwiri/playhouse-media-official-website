'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { LoginForm, LoginFormSchema } from '@/lib/models';
import Link from 'next/link';
import Spinner from '@/components/Spinner';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export function LoginUser() {
  const router = useRouter();
  const form = useForm<LoginForm>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(data: LoginForm) {
    try {
      setIsSubmitting(true);
      const signInData = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (signInData?.error) {
        setIsSubmitting(false);
        console.log(signInData.error);
      } else {
        router.push('/dashboard');
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
          <div className='my-2 gap-2 flex justify-between items-center'>
            <Button type='submit' disabled={isSubmitting}>
              Login {isSubmitting && <Spinner />}
            </Button>
            <small>
              Don&apos;t have an account?{' '}
              <Link href='/register' className='text-primary font-medium'>
                Register
              </Link>
            </small>
          </div>
        </form>
      </section>
    </Form>
  );
}
