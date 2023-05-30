import { logo, menu } from '@/data/images';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='mx-auto flex w-full max-w-[1240px] items-center justify-between px-4 py-4'>
      <Link href={`/`}>
        <Image src={logo} alt='logo icon' />
      </Link>

      <div className='flex'>
        <Link
          className='text-xl font-semibold text-accent hover:text-white md:text-3xl'
          // activate when we add menu button👇
          // className='pr-6 text-xl font-semibold text-accent md:pr-24 md:text-3xl'
          href={`https://wa.me/message/AQCSRA3QZVK7G1`}
          target='_blank'
          rel='noreferrer'
        >
          Start a Project
        </Link>
        {/* <div className='grid w-14 cursor-pointer justify-items-end gap-1'>
          <div className='h-1 w-14 bg-white'></div>
          <div className='h-1 w-10 bg-accent '></div>
          <div className='h-1 w-8 bg-white'></div>
        </div> */}
      </div>
    </div>
  );
};
export default Navbar;
