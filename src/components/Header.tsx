'use client';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="py-8">
      <nav className="flex justify-between items-center max-w-4xl mx-auto px-4">
        <Link href="/" className="font-bold sm:text-xl md:text-2xl lg:text-2xl text-blue-600 hover:text-gray-300">
          GYIMADU
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex text-lg sm:text-md space-x-6">
          <Link href="https://github.com/gyimadu" target="_blank" className="text-gray-400 hover:text-gray-700 transition-colors">GitHub</Link>
          <Link href="https://twitter.com/gyimaduu" target="_blank" className="text-gray-400 hover:text-gray-700 transition-colors">Twitter</Link>
          <Link href="https://instagram.com/gyimadu_" target="_blank" className="text-gray-400 hover:text-gray-700 transition-colors">Instagram</Link>
          <Link href="https://linkedin.com/in/michael-gyimadu" target="_blank" className="text-gray-400 hover:text-gray-700 transition-colors">LinkedIn</Link>        
        </div>
        {/* Mobile Menu */}
        <MobileMenu />
      </nav>
    </header>
  );
} 