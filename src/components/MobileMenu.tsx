'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        className="relative p-2 z-50"
      >
        <div className="w-8 h-8 flex flex-col justify-center items-center gap-1">
          <span 
            className={`bg-black block h-px w-9 rounded-sm transition-all duration-500 ease-in-out ${
              isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}
          />
          <span 
            className={`bg-black block h-px w-9 rounded-sm transition-all duration-500 ease-in-out ${
              isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-0.5'
            }`}
          />
        </div>
      </button>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white transition-opacity duration-400 ease-in-out z-40
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}
      >
        <div className="max-w-5xl mx-auto px-4">
          <nav className="flex uppercase flex-col items-start pt-28 space-y-8">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`text-xl transform transition-all duration-500 ${
                isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              } ${pathname === '/' ? 'text-black underline underline-offset-4' : 'text-gray-500'}`}
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              onClick={() => setIsOpen(false)}
              className={`text-xl transform transition-all duration-500 delay-150 ${
                isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              } ${pathname === '/portfolio' ? 'text-black underline underline-offset-4' : 'text-gray-500'}`}
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className={`text-xl transform transition-all duration-500 delay-150 ${
                isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              } ${pathname === '/blog' ? 'text-black underline underline-offset-4' : 'text-gray-500'}`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`text-xl transform transition-all duration-500 delay-300 ${
                isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              } ${pathname === '/contact' ? 'text-black underline underline-offset-4' : 'text-gray-500'}`}
            >
              Contact
            </Link>
          </nav>
          
        </div>
      </div>
    </div>
  );
} 