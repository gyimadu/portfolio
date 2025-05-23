'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white sticky top-0 z-50 ">
      <div className="max-w-3xl mx-auto px-4 sm:px-4 py-3 lg:pt-14">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-3xl md:text-3xl text-black hover:text-gray-600 transition-colors font-medium">
            MICHAEL GYIMADU
          </Link>
          
          <div className="md:flex hidden items-center space-x-8">
            <Link 
              href="/" 
              className={`text-xl hover:text-gray-600 transition-colors ${pathname === '/' ? 'text-black font-light underline underline-offset-4 decoration-1' : 'text-gray-500'}`}
            >
              HOME
            </Link>
            <Link 
              href="/portfolio" 
              className={`text-xl hover:text-gray-600 transition-colors ${pathname === '/portfolio' ? 'text-black font-light underline underline-offset-4 decoration-1' : 'text-gray-500'}`}
            >
              WORK
            </Link>
            <Link
              href="/blog"
              className={`text-xl hover:text-gray-600 transition-colors ${pathname === '/blog' ? 'text-black font-light underline underline-offset-4 decoration-1' : 'text-gray-500'}`}
            >
              BLOG
            </Link>
            <Link 
              href="/contact" 
              className={`text-xl hover:text-gray-600 transition-colors ${pathname === '/contact' ? 'text-black font-light underline underline-offset-4 decoration-1' : 'text-gray-500'}`}
            >
              CONTACT
            </Link>
          </div>
          
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
} 