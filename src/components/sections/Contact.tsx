import Image from 'next/image';
import Link from 'next/link';
import { downArrow, mail, map, phone } from '@/data/images';
import TitleHeader from '../ui/TitleHeader';
import { mapLocation } from '@/data';
import ContactMap from '../ContactMap';

const Contact = () => {
  return (
    <section id='contact' className='mx-auto my-20 w-full max-w-[1240px] px-4 '>
      <header>
        <TitleHeader title='Talk to us today.' subTitle='Contact us' />
      </header>
      <article className='my-8 grid gap-4 text-center sm:grid-cols-2 md:grid-cols-3'>
        <div className='flex flex-col items-center justify-center rounded bg-secondary p-8 '>
          <Image
            src={phone}
            placeholder='blur'
            blurDataURL={phone.toString()}
            alt='phone icon'
            className='h-auto w-12 py-5'
          />
          <div>
            <h3 className='text-lg font-medium'>Phone Number</h3>
            <Link href={`tel:+27740491433`} className=''>
              074 049 1433
            </Link>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center rounded bg-secondary p-8'>
          <Image
            src={mail}
            placeholder='blur'
            blurDataURL={mail.toString()}
            alt='phone icon'
            className='h-auto w-12 py-5'
          />
          <div>
            <h3 className='text-lg font-medium'>Email Address</h3>
            <Link href={`mailto:info@playhousemedia.net`} className=''>
              info@playhousemedia.net
            </Link>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center rounded bg-secondary p-8'>
          <Image
            src={map}
            placeholder='blur'
            blurDataURL={map.toString()}
            alt='phone icon'
            className='h-auto w-12 py-5'
          />
          <div>
            <h3 className='text-lg font-medium'>Physical Address</h3>
            <Link
              href={mapLocation}
              className=''
              target='_blank'
              rel='noreferrer'
            >
              285 Erasmus Ave, Raslouw AH, Centurion, 0157
            </Link>
          </div>
        </div>
        <div className='hidden flex-col items-center justify-center rounded bg-secondary p-8 sm:flex md:hidden'>
          <Image
            src={downArrow}
            alt='phone icon'
            className='h-auto w-12 animate-pulse py-5 '
          />
          <h3 className=' text-lg font-medium'>
            Let us work together on your next project.
          </h3>
        </div>
      </article>
      <article>
        <ContactMap />
      </article>
    </section>
  );
};
export default Contact;
