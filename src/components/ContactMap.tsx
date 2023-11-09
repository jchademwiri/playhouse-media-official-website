import Link from 'next/link';
import ContactForm from './forms/ContactForm';
import { mapLocation } from '@/data';

const ContactMap = () => {
  return (
    <div className='mx-auto w-full flex md:flex-nowrap flex-wrap'>
      <div className='lg:w-2/3 md:w-1/2 bg-muted-foreground/50 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
        <iframe
          width='100%'
          height='100%'
          className='absolute inset-0'
          title='map'
          src={mapLocation}
          // style={`filter: grayscale(1) contrast(1.2) opacity(0.4)`}
        ></iframe>

        <div className='relative flex w-full flex-wrap bg-secondary py-6 rounded shadow-md'>
          <div className='lg:w-1/2 px-6'>
            <h2 className='title-font font-semibold text-muted-foreground tracking-widest text-xs'>
              ADDRESS
            </h2>
            <p className='mt-1'>285 Erasmus Ave, Raslouw AH, Centurion, 0157</p>
          </div>
          <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
            <h2 className='title-font font-semibold text-muted-foreground tracking-widest text-xs'>
              EMAIL
            </h2>

            <Link
              href='mailto:info@playhousemedia.net'
              className='text-primary leading-relaxed'
            >
              info@playhousemedia.net
            </Link>
            <h2 className='title-font font-semibold text-muted-foreground tracking-widest text-xs mt-4'>
              PHONE
            </h2>

            <Link href='tel:+27740491433' className='leading-relaxed'>
              074-049-1433
            </Link>
          </div>
        </div>
      </div>
      <div className='lg:w-1/3 md:w-1/2 p-6 flex flex-col border rounded-lg md:ml-auto w-full md:py-8 mt-8 md:mt-0'>
        <h2 className='text-muted-foreground text-3xl mb-1 font-bold'>
          Get in touch
        </h2>
        <p className='leading-relaxed mb-5 text-muted-foreground'>
          Let’s forge a relationship that will bring your vision to life.
          Contact us today to get started.
        </p>
        <ContactForm />
        {/* <p className='text-xs text-muted-foreground/50 mt-3'>
          We will not share any of your information with any third-party
          comapnies.
        </p> */}
      </div>
    </div>
  );
};
export default ContactMap;
