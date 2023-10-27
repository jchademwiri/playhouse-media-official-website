import Link from 'next/link';
import { ModeToggle } from '../ModeToggle';
import { Menu } from './Menu';
import { MobileMenu } from './MobileNav';
import Image from 'next/image';
import { logo } from '@/data/images';

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
          <div className='md:hidden'>
            <MobileMenu />
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
export default NavMenu;
