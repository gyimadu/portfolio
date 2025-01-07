import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      {/* Hamburger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-black p-2 z-50"
      >
        <div className="space-y-2">
          <span className={`block w-8 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`
          absolute right-0 top-full mt-2 w-48
          bg-[#FAF9F6] rounded-lg shadow-lg z-40
          border border-gray-200
          transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
        `}
      >
        <div className="py-4 px-6 space-y-4">
          <p className="text-sm text-gray-600 border-b border-gray-200 pb-2">Connect with me on my socials!</p>
          <Link 
            href="https://github.com/gyimadu" 
            target="_blank"
            className="block text-gray-500 hover:text-black transition-colors text-base"
            onClick={() => setIsOpen(false)}
          >
            GitHub
          </Link>
          <Link 
            href="https://twitter.com/gyimaduu" 
            target="_blank"
            className="block text-gray-500 hover:text-black transition-colors text-base"
            onClick={() => setIsOpen(false)}
          >
            Twitter
          </Link>
          <Link 
            href="https://instagram.com/gyimadu_" 
            target="_blank"
            className="block text-gray-500 hover:text-black transition-colors text-base"
            onClick={() => setIsOpen(false)}
          >
            Instagram
          </Link>
          <Link 
            href="https://linkedin.com/in/michael-gyimadu" 
            target="_blank"
            className="block text-gray-500 hover:text-black transition-colors text-base"
            onClick={() => setIsOpen(false)}
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
} 