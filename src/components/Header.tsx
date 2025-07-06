'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white md:bg-transparent sticky top-0 z-50">
      <div className="max-w-full mx-auto px-4 py-3 md:pt-8">
        <nav className="flex justify-between items-center md:items-start md:px-4">
          <Link href="/" className="text-3xl md:text-3xl hover:text-gray-600 transition-colors font-medium">
            <span className="gradient-text font-mouse">MICHAEL GYIMADU</span>
          </Link>
          
          <div className="md:flex md:flex-col hidden items-end justify-between space-y-1">
            <Link 
              href="/" 
              className={`text-2xl hover:text-gray-600 transition-colors ${pathname === '/' ? 'text-black font-light underline underline-offset-4 decoration-1' : 'text-gray-500'}`}
            >
              HOME
            </Link>
            <Link 
              href="/portfolio" 
              className={`text-2xl hover:text-gray-600 transition-colors ${pathname === '/portfolio' ? 'text-black font-light underline underline-offset-4 decoration-1' : 'text-gray-500'}`}
            >
              WORK
            </Link>
            <Link 
              href="/papers" 
              className={`text-2xl hover:text-gray-600 transition-colors ${pathname === '/papers' ? 'text-black font-light underline underline-offset-4 decoration-1' : 'text-gray-500'}`}
            >
              PAPERS
            </Link>
            <Link
              href="/blog"
              className={`text-2xl hover:text-gray-600 transition-colors ${pathname === '/blog' ? 'text-black font-light underline underline-offset-4 decoration-1' : 'text-gray-500'}`}
            >
              BLOG
            </Link>
            <Link 
              href="/contact" 
              className={`text-2xl hover:text-gray-600 transition-colors ${pathname === '/contact' ? 'text-black font-light underline underline-offset-4 decoration-1' : 'text-gray-500'}`}
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