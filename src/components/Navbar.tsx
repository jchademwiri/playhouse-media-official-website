import { logo, menu } from '@/data/images';
import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';

const Navbar = () => {
  return (
    <nav className='mx-auto flex w-full max-w-[1240px] items-center justify-between px-4 py-4'>
      <Link href={`/`}>
        <Image
          src={logo}
          width={70}
          height={70}
          placeholder='blur'
          blurDataURL={logo.toString()}
          alt='logo icon'
        />
      </Link>

      <div className='flex'>
        <Link
          className='text-xl font-semibold text-primary hover: md:text-3xl'
          // activate when we add menu button👇
          // className='pr-6 text-xl font-semibold text-primary md:pr-24 md:text-3xl'
          href={`https://wa.me/message/AQCSRA3QZVK7G1`}
          target='_blank'
          rel='noreferrer'
        >
          Start a Project
        </Link>
        <div className='grid w-14 cursor-pointer justify-items-end gap-1'>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
