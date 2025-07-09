'use client';
import Header from '@/components/Header';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-12 md:py-8">
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:gap-16 md:items-start">
            {/* Left column - 20% */}
            <div className="mb-8 md:mb-0 md:w-1/4 md:sticky md:top-24">
              <div className="text-3xl md:text-4xl font-bold text-black uppercase font-mouse">Get In Touch!</div>
            </div>

            {/* Right column - 80% */}
            <div className="lg:w-3/4">
              <form 
                action="https://formspree.io/f/mbllpppa"
                method="POST"
                className="space-y-6 md:space-y-8"
              >
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-black text-lg md:text-xl font-mouse">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-5 py-3 bg-gray-50 text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 text-base lg:text-base"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="block text-black text-lg md:text-xl font-mouse">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-5 py-3 bg-gray-50 text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 text-base md:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="block text-black text-lg md:text-xl font-mouse">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-5 py-3 bg-gray-50 text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 text-base md:text-base"
                    placeholder="Your message..."
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-6 py-2 font-f1 bg-black text-white text-base md:text-base rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer className="text-center border-t sm:border-t-0 border-gray-200 pt-8 text-black text-xs pb-8">
            <div className="flex justify-center gap-2 md:gap-4 mb-6">
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
            <div className="mb-2">Last Updated: May 2025</div>
            <div>© {new Date().getFullYear()} Michael Gyimadu.</div>
        </footer>
      </main>
    </div>
  );
} 