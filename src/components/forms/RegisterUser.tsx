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
import { useState } from 'react';
import Spinner from '@/components/Spinner';

export function RegisterUser() {
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
    setIsSubmitting(true);
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
      form.reset();
    } else {
      setIsSubmitting(false);
      setError('An unexpected error ocured');
      toast({
        title: 'Error',
        description: `${error}`,
        variant: 'destructive',
      });
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
          {/* <div className=' gap-2 flex justify-between items-center'> */}
          <Button type='submit' disabled={isSubmitting} className='my-2'>
            Register New User {isSubmitting && <Spinner />}
          </Button>

          {/* </div> */}
        </form>
      </section>
    </Form>
  );
}
