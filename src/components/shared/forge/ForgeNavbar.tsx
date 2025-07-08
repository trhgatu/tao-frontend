'use client';
import { ModeToggle } from '@/components/shared/ModeToggle';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar';
import { useState } from 'react';

export function NavbarForge() {
  const navItems = [
    {
      name: 'Features',
      link: '#features',
    },
    {
      name: 'Projects',
      link: '/forge/projects',
    },
    {
      name: 'About me',
      link: '#contact',
    },
    {
      name: 'Timeline',
      link: '/forge/timeline',
    },
    {
      name: 'Contact',
      link: '#contact',
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        {/* <div className="flex items-center gap-4">
          <NavbarButton variant="primary">Book a call</NavbarButton>
        </div> */}
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
            >
              Login
            </NavbarButton>
            <ModeToggle />
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
