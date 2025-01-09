'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-8 lg:py-8">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-lg sm:text-lg md:text-2xl text-black hover:text-gray-600 transition-colors font-medium">
            MICHAEL GYIMADU
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-xl hover:text-gray-600 transition-colors ${pathname === '/' ? 'text-black font-light' : 'text-gray-500'}`}
            >
              Home
            </Link>
            <Link 
              href="/portfolio" 
              className={`text-xl hover:text-gray-600 transition-colors ${pathname === '/portfolio' ? 'text-black font-light' : 'text-gray-500'}`}
            >
              Portfolio
            </Link>
            <Link 
              href="/contact" 
              className={`text-xl hover:text-gray-600 transition-colors ${pathname === '/contact' ? 'text-black font-light' : 'text-gray-500'}`}
            >
              Contact
            </Link>
          </div>
          
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
} 