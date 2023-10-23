import { logo, menu } from '@/data/images';
import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav className='mx-auto flex w-full max-w-[1240px] items-center justify-between px-4 py-4'>
      <Link href={`/`}>
        <Image
          src={logo}
          width={50}
          height={50}
          placeholder='blur'
          blurDataURL={logo.toString()}
          alt='logo icon'
        />
      </Link>

      <div className='flex items-center'>
        <Button variant={'link'}>
          <Link
            className='text-xl md:text-3xl font-semibold text-primary'
            // activate when we add menu button👇
            // className='pr-6 text-xl font-semibold text-primary md:pr-24 md:text-3xl'
            href={`https://wa.me/message/AQCSRA3QZVK7G1`}
            target='_blank'
            rel='noreferrer'
          >
            Start a Project
          </Link>
        </Button>
        <div className='grid w-14 cursor-pointer justify-items-end gap-1'>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
