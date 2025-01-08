'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="md:hidden relative">
      {/* Hamburger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-black p-2 z-50"
      >
        <div className="space-y-2">
          <span className={`block w-8 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </div>
      </button>

      {/* Overlay for closing menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Dropdown */}
      <div 
        ref={menuRef}
        className={`
          absolute right-0 top-full mt-2 w-48
          bg-[#F5F5F1] rounded-lg shadow-lg z-40
          border border-[#EFEEE9]
          transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
        `}
      >
        <div className="py-4 px-6 space-y-4">
          <Link 
            href="/" 
            className={`block text-base transition-colors ${pathname === '/' ? 'text-black font-medium' : 'text-gray-500 hover:text-black'}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/portfolio" 
            className={`block text-base transition-colors ${pathname === '/portfolio' ? 'text-black font-medium' : 'text-gray-500 hover:text-black'}`}
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
} 