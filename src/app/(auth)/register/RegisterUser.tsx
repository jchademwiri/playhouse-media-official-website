'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

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
import { RegisterFormSchema } from '@/lib/models';

export function RegisterUser() {
  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
    },
  });

  function onSubmit(data: z.infer<typeof RegisterFormSchema>) {
    toast({
      title: `Thank you ${data.fullname} for registering`,
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-secondary p-4'>
          <div>
            <code>{JSON.stringify('Form submited Successfully', null, 2)}</code>
          </div>
        </pre>
      ),
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <section className='w-2/3 max-w-sm space-y-6 border border-secondary rounded-sm p-4'>
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
          <Button className='my-2' type='submit'>
            Register
          </Button>
        </form>
      </section>
    </Form>
  );
}
