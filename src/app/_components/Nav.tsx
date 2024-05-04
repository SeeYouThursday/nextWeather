'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Nav = () => {
  // used to track active tab/link in nav
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  type navItem = {
    href: string;
    name: string;
    isActive: boolean;
  };

  const navItems: navItem[] = [
    { href: '/', name: 'Home', isActive: false },
    { href: '/dashboard', name: 'Dashboard', isActive: false },
    { href: '/login', name: 'Login', isActive: false },
    { href: '/signup', name: 'Sign Up', isActive: false },
  ];

  return (
    <>
      {/* //!! Currently doesn't hide due to Swiper */}
      <Navbar shouldHideOnScroll={true}>
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          />
        </NavbarContent>
        <NavbarContent>{/* //TODO: Brand Here */}</NavbarContent>

        <NavbarContent
          className="hidden md:flex gap-4"
          justify="center"
        ></NavbarContent>

        {/* {navItems.map((item) => {
        <Nav
          <NavbarItem key={item.name}>{item.name}</NavbarItem>;
        })} */}
        <NavbarContent justify="center">
          {' '}
          {navItems.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <NavbarItem key={link.name} isActive={isActive}>
                <Link href={link.href}>{link.name}</Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Nav;
