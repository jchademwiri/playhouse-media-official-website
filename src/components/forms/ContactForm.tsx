'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
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

const ContactForm = () => {
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(data: ContactForm) {
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
              Email:
              <code>{JSON.stringify(data.email, null, 2)}</code>
            </p>
          </pre>
          <p className='py-2'>We will get back to you as soon as possible.</p>
        </div>
      ),
    });

    console.log(data);
    form.reset();
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
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='Email...' {...field} />
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
