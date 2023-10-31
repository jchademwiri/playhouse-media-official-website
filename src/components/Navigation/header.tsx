'use client';

import React from 'react';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import useScroll from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../ThemeToggle';

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-card`,
        {
          'border-b border-card backdrop-blur-lg': scrolled,
          'border-b border-card': selectedLayout,
        }
      )}
    >
      <div className='flex h-[47px] items-center justify-between px-4'>
        <div className='flex items-center space-x-4'>
          <Link
            href='/dashboard'
            className='flex flex-row space-x-3 items-center justify-center md:hidden'
          >
            <span className='h-7 w-7 bg-secondary rounded-lg' />
            <span className='font-bold text-xl flex '>Logo</span>
          </Link>
        </div>
        <div className='grid grid-cols-2 place-items-center '>
          <ThemeToggle />

          <div className='hidden md:block'>
            <div className='h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-center'>
              <span className='font-semibold text-sm'>HQ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
