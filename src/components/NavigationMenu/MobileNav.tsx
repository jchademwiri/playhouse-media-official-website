'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '../ui/button';
import { Facebook, Linkedin, MenuIcon, Twitter } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@radix-ui/react-navigation-menu';
import { links } from './links';
import Link from 'next/link';

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size={'icon'}>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader className='text-left'>
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>We are at your service.</SheetDescription>
        </SheetHeader>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className='my-4'>
              {links.map((link) => (
                <div key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`grid gap-2 !text-left rounded-sm p-2 hover:bg-accent`}
                    >
                      <SheetClose className='text-left'>
                        {link.title}
                      </SheetClose>
                    </NavigationMenuLink>
                  </Link>
                </div>
              ))}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <SheetFooter className='flex-row sm:justify-start gap-2'>
          <Button size={'icon'} variant={'outline'}>
            <Link href='/' className='p-2'>
              <Facebook />
            </Link>
          </Button>
          <Button size={'icon'} variant={'outline'}>
            <Link href='/' className='p-2'>
              <Twitter />
            </Link>
          </Button>
          <Button size={'icon'} variant={'outline'}>
            <Link href='/' className='p-2'>
              <Linkedin />
            </Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
