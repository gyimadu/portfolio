'use client';
import Header from '@/components/Header';
import BlogPost from '@/components/BlogPost';
import { blogPosts } from '@/data/blogPosts';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-3xl font-bold md:text-4xl text-black mb-10 uppercase font-mouse">Blog</div>
        
        <div className="space-y-0">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>

        {/* Footer */}
        <footer className="border-t sm:border-t-0 border-gray-200 pt-8 text-center text-black text-xs pb-8 mt-16">
          <div className="flex justify-center gap-2 md:gap-4 mb-4">
            <a 
              href="https://github.com/gyimadu" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-50 text-black rounded-xl hover:bg-gray-100 text-center transition-all shadow-sm hover:shadow-md"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a 
              href="https://twitter.com/gyimaduu" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#F5F5F1] text-black rounded-xl hover:bg-[#EFEEE9] text-center transition-all shadow-sm hover:shadow-md"
              aria-label="X (Twitter) Profile"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a 
              href="https://instagram.com/gyimadu_" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#F5F5F1] text-black rounded-xl hover:bg-[#EFEEE9] text-center transition-all shadow-sm hover:shadow-md"
              aria-label="Instagram Profile"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/michael-gyimadu" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#F5F5F1] text-black rounded-xl hover:bg-[#EFEEE9] text-center transition-all shadow-sm hover:shadow-md"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
          <div className="mb-2">Last Updated: July 2025</div>
          <div>© {new Date().getFullYear()} Michael Gyimadu.</div>
        </footer>
      </main>
    </div>
  );
} 