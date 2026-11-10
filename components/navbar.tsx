'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Experiencia', href: '/#experiencia' },
    { name: 'Medición', href: '/#medicion' },
    { name: 'Testimonios', href: '/#testimonios' },
    { name: 'Contacto', href: '/#contacto' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? 'bg-surface-dark/95 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <div className="shrink-0">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center rounded-sm focus-visible:ring-2 focus-visible:ring-focus-inverse focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:outline-hidden"
            >
              <Image
                src="/images/logo_horizontal_flat_color_dark_bg.svg"
                alt="Kaidev Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-0 lg:gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center rounded-sm px-2 font-medium text-ink-inverse transition-colors duration-300 hover:text-silentJade focus-visible:ring-2 focus-visible:ring-focus-inverse focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:outline-hidden lg:px-3"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink-inverse transition-colors hover:text-silentJade focus-visible:ring-2 focus-visible:ring-focus-inverse focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:outline-hidden"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-ink-inverse/10 bg-surface-dark md:hidden"
        >
          <div className="space-y-1 px-4 pt-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex min-h-11 items-center rounded-sm px-3 font-medium text-ink-inverse transition-colors duration-300 hover:text-silentJade focus-visible:ring-2 focus-visible:ring-focus-inverse focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:outline-hidden"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
