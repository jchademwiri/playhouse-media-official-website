import Link from 'next/link';
import { ThemeToggle } from '../ThemeToggle';
import { Menu } from './Menu';
import { MobileMenu } from './MobileNav';
import Image from 'next/image';
import { logo } from '@/data/images';
import { Button } from '../ui/button';

const NavMenu = () => {
  return (
    <nav className=' sticky top-0 bg-background  z-50 items-center py-4'>
      <div className='flex px-4 w-full max-w-[1240px] mx-auto justify-between'>
        <Link href='/#home' className='font-semibold'>
          <Image
            src={logo}
            alt='playhouse media group logo'
            width={738}
            height={741}
            className='w-auto h-12'
          />
        </Link>
        <div className='flex items-center gap-1'>
          <div className='hidden md:block'>
            <Menu />
          </div>

          {/* <Button variant={'link'}>
            <Link
              className='text-xl md:text-3xl font-semibold text-primary'
              href={`https://wa.me/message/AQCSRA3QZVK7G1`}
              target='_blank'
              rel='noreferrer'
            >
              New Project
            </Link>
          </Button> */}

          <div className='md:hidden'>
            <MobileMenu />
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
export default NavMenu;
