'use client';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const ContactMap = () => {
  const googleMap =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.1729973981214!2d32.62431756729264!3d-18.967965726169698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x192ceb2990bf0beb%3A0x1c44c83d085dd244!2sPlayhouse%20Media%20Group!5e0!3m2!1sen!2sza!4v1698135371217!5m2!1sen!2sza';
  return (
    <div className='mx-auto flex md:flex-nowrap flex-wrap'>
      <div className='lg:w-2/3 md:w-1/2 bg-muted-foreground/50 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
        <iframe
          width='100%'
          height='100%'
          className='absolute inset-0'
          title='map'
          src={googleMap}
        ></iframe>

        <div className=' relative flex flex-wrap bg-secondary py-6 rounded shadow-md'>
          <div className='lg:w-1/2 px-6'>
            <h2 className='title-font font-semibold text-muted-foreground tracking-widest text-xs'>
              ADDRESS
            </h2>
            <p className='mt-1'>
              Photo booth tattooed prism, portland taiyaki hoodie neutra
              typewriter
            </p>
          </div>
          <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
            <h2 className='title-font font-semibold text-muted-foreground tracking-widest text-xs'>
              EMAIL
            </h2>
            <a className='text-primary leading-relaxed'>example@email.com</a>
            <h2 className='title-font font-semibold text-muted-foreground tracking-widest text-xs mt-4'>
              PHONE
            </h2>
            <p className='leading-relaxed'>123-456-7890</p>
          </div>
        </div>
      </div>
      <div className='lg:w-1/3 md:w-1/2 p-6 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
        <h2 className='text-muted-foreground text-xl mb-1 font-medium'>
          Send us a message.
        </h2>
        <p className='leading-relaxed mb-5 text-muted-foreground'>
          We would like to hear from you. Contact us below and we will get back
          to you as soon as possible.
        </p>
        <form action=''>
          <div className='relative mb-4'>
            <Label className=''>Name</Label>
            <Input type='text' id='name' name='name' />
          </div>
          <div className='relative mb-4'>
            <Label className=''>Email</Label>
            <Input type='email' id='email' name='email' />
          </div>
          <div className='relative mb-4'>
            <Label className=''>Message</Label>
            <Textarea id='message' name='message'></Textarea>
          </div>
          <Button className='w-full'>Send Message</Button>
        </form>
        <p className='text-xs text-muted-foreground/50 mt-3'>
          We will not share any of your information with any third-party
          comapnies or organisation.
        </p>
      </div>
    </div>
  );
};
export default ContactMap;
