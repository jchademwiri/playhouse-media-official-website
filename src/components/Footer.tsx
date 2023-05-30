import { servicesLinks, socialLinks } from '@/data';
import { user } from '@/data/images';
import Image from 'next/image';
import Link from 'next/link';
import uuid from 'react-uuid';

const Footer = () => {
  return (
    <footer className='bg-armyGreen/40 py-12'>
      <div className='mx-auto grid w-full max-w-[1240px] gap-4 px-4 md:grid-cols-2 md:place-items-center '>
        <div className=''>
          <header className='flex items-center text-2xl'>
            <Image src={user} alt='consulting user icon' className='pr-4' />
            Consulting
          </header>
          <p className='py-4'>
            Your website is the foundation of your online presence. We will work
            with you to design and develop a custom design of your website that
            will meet your business goals and objectives.
          </p>
          <Link
            href={`https://wa.me/message/AQCSRA3QZVK7G1`}
            className='text-xl font-medium text-accent hover:text-white '
          >
            Let&apos;s Start a Project
            <div className='h-1 w-28 bg-white'></div>
          </Link>
        </div>
        <div className='grid grid-cols-2 gap-8'>
          <nav>
            <h3 className='py-4 text-lg font-medium text-accent md:text-xl md:font-semibold'>
              Our Services
            </h3>
            <ul>
              {servicesLinks.map(({ name, url }) => (
                <li key={uuid()} className='py-1 hover:text-accent'>
                  <Link href={url}>{name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav>
            <h3 className='py-4 text-lg font-medium text-accent md:text-xl md:font-semibold'>
              Social Links
            </h3>
            <ul>
              {socialLinks.map(({ name, url }) => (
                <li key={uuid()} className='py-1 hover:text-accent'>
                  <Link href={url} target='_blank' rel='noreferrer'>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
