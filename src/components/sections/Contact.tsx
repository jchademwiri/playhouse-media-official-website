import Image from 'next/image';
import SectionTitle from '../SectionTitle';
import Link from 'next/link';
import { downArrow, mail, map, phone } from '@/data/images';

const Contact = () => {
  return (
    <section className='mx-auto my-20 w-full max-w-[1240px] px-4'>
      <header>
        <h2 className='text-4xl font-semibold md:text-6xl'>
          Talk to us today.
        </h2>
        <SectionTitle title='Contact us' />
      </header>
      <article className='my-8 grid gap-4 text-center sm:grid-cols-2 md:grid-cols-3'>
        <div className='flex flex-col items-center justify-center rounded bg-armyGreen p-8 '>
          <Image src={phone} alt='phone icon' className='h-auto w-12 py-5' />
          <div>
            <h3 className='text-lg font-medium'>Phone Number</h3>
            <Link href={`tel:+27740491433`} className=''>
              074 049 1433
            </Link>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center rounded bg-armyGreen p-8'>
          <Image src={mail} alt='phone icon' className='h-auto w-12 py-5' />
          <div>
            <h3 className='text-lg font-medium'>Email Address</h3>
            <Link href={`mailto:info@playhousemedia.net`} className=''>
              info@playhousemedia.net
            </Link>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center rounded bg-armyGreen p-8'>
          <Image src={map} alt='phone icon' className='h-auto w-12 py-5' />
          <div>
            <h3 className='text-lg font-medium'>Physical Address</h3>
            <Link
              href={`https://www.google.com/search?q=84+Goldman+Street%2C+Florida+Roodeport%2C+Gauteng&oq=84+Goldman+Street%2C+Florida+Roodeport%2C+Gauteng&aqs=chrome..69i57.680j0j4&sourceid=chrome&ie=UTF-8`}
              className=''
              target='_blank'
              rel='noreferrer'
            >
              84 Goldman Street, Florida Roodepoort, Gauteng
            </Link>
          </div>
        </div>
        <div className='hidden flex-col items-center justify-center rounded bg-armyGreen p-8 sm:flex md:hidden'>
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
    </section>
  );
};
export default Contact;
