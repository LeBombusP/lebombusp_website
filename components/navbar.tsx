'use client';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import {Github} from 'lucide-react';
import Link from 'next/link';
import {DarkMode} from "@/components/dark";

export default function Navbar() {
  return (
    <header className='supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur mb-4'>
      <NavigationMenu className='min-[1440px]:w-[1440px] m-auto'>
        <div className='flex flex-1 items-center justify-start space-x-2 px-4 py-1'>
          <Link href='/' legacyBehavior passHref>
            <a className='flex items-center space-x-2'>
              <Avatar>
                <AvatarImage src='icon.svg'/>
                <AvatarFallback>BP</AvatarFallback>
              </Avatar>
              <span className='hidden font-semibold sm:inline-block'>LeBombusP</span>
            </a>
          </Link>
        </div>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href='/' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/projects' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Projects</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/dashboard' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Dashboard</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <div className='flex flex-1 items-center justify-end space-x-2 px-4'>
          <a href='https://github.com/LeBombusP' target='_blank'
             className='mr-2 md:mr-6 flex items-center space-x-2'>
            <Github size={18}/>
          </a>
          <DarkMode/>
        </div>
      </NavigationMenu>
    </header>
  );
}