'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-[#FAF9F6] sticky top-0 z-50 border-b border-[#EFEEE9]">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="sm:text-xl md:text-2xl lg:text-2xl text-black hover:text-gray-600 transition-colors">
            MICHAEL GYIMADU
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-lg hover:text-gray-600 transition-colors ${pathname === '/' ? 'text-black font-medium' : 'text-gray-500'}`}
            >
              Home
            </Link>
            <Link 
              href="/portfolio" 
              className={`text-lg hover:text-gray-600 transition-colors ${pathname === '/portfolio' ? 'text-black font-medium' : 'text-gray-500'}`}
            >
              Portfolio
            </Link>
          </div>
          
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
} 