import { logo, menu } from '@/data/images';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='max-w-[1240px] py-4 flex items-center justify-between w-full mx-auto px-4'>
      <Link href={`/`}>
        <Image src={logo} alt='logo icon' />
      </Link>

      <div className='flex'>
        <Link
          className='text-xl font-semibold text-accent md:text-3xl'
          // activate when we add menu button👇
          // className='md:pr-24 pr-6 text-xl font-semibold text-accent md:text-3xl'
          href={`/`}
        >
          Start a Project
        </Link>
        <Image src={menu} alt='menu icon' className='hidden' />
      </div>
    </div>
  );
};
export default Navbar;
