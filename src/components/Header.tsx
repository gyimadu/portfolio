'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white sticky top-0 z-50 ">
      <div className="max-w-3xl mx-auto px-8 sm:px-4 py-4 lg:pt-14">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-base sm:text-lg lg:text-xl text-black hover:text-gray-600 transition-colors font-medium">
            MICHAEL GYIMADU
          </Link>
          
          <div className="md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-base hover:text-gray-600 transition-colors ${pathname === '/' ? 'text-black font-light underline underline-offset-4 decoration-1' : 'text-gray-500'}`}
            >
              Home
            </Link>
            <Link 
              href="/portfolio" 
              className={`text-base hover:text-gray-600 transition-colors ${pathname === '/portfolio' ? 'text-black font-light underline underline-offset-4 decoration-1' : 'text-gray-500'}`}
            >
              Portfolio
            </Link>
            <Link
              href="https://gyimadu.medium.com/"
              target='_blank'
              className="text-gray-500">
                Blog | <span className='text-black'>Medium</span>
            </Link>
            <Link 
              href="/contact" 
              className={`text-base hover:text-gray-600 transition-colors ${pathname === '/contact' ? 'text-black font-light underline underline-offset-4 decoration-1' : 'text-gray-500'}`}
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