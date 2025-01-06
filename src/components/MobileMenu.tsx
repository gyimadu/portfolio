import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2"
      >
        <div className="space-y-2">
          <span className={`block w-8 h-0.5 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#FAF9F6] z-50">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link 
              href="https://github.com/gyimadu" 
              target="_blank"
              className="text-gray-500 hover:text-white transition-colors text-xl"
              onClick={() => setIsOpen(false)}
            >
              GitHub
            </Link>
            <Link 
              href="https://twitter.com/gyimaduu" 
              target="_blank"
              className="text-gray-500 hover:text-white transition-colors text-xl"
              onClick={() => setIsOpen(false)}
            >
              Twitter
            </Link>
            <Link 
              href="https://instagram.com/gyimadu_" 
              target="_blank"
              className="text-gray-500 hover:text-white transition-colors text-xl"
              onClick={() => setIsOpen(false)}
            >
              Instagram
            </Link>
            <Link 
              href="https://linkedin.com/in/michael-gyimadu" 
              target="_blank"
              className="text-gray-500 hover:text-white transition-colors text-xl"
              onClick={() => setIsOpen(false)}
            >
              LinkedIn
            </Link>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-white transition-colors text-xl mt-8"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 