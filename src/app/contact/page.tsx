'use client';
import Header from '@/components/Header';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row lg:gap-16 lg:items-start">
            {/* Left column - 20% */}
            <div className="mb-8 lg:mb-0 lg:w-1/5 lg:sticky lg:top-24">
              <h2 className="font-bold text-2xl sm:text-2xl lg:text-3xl text-black">Get In Touch With Me!</h2>
            </div>

            {/* Right column - 80% */}
            <div className="lg:w-4/5">
              <form 
                action="https://formspree.io/f/mbllpppa"
                method="POST"
                className="space-y-8"
              >
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-black text-lg">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-5 py-3 bg-gray-50 text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 text-lg sm:text-lg"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="block text-black text-lg">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-5 py-3 bg-gray-50 text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 text-lg sm:text-lg"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="block text-black text-lg">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-5 py-3 bg-gray-50 text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 text-lg sm:text-lg"
                    placeholder="Your message..."
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer className="text-center text-gray-500 text-sm pb-8">
            <div className="flex justify-center gap-2 md:gap-6 mb-4">
              <a 
                href="https://github.com/gyimadu" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-50 text-black rounded-full hover:bg-gray-100 text-center transition-all shadow-sm hover:shadow-md"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/gyimaduu" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#F5F5F1] text-black rounded-full hover:bg-[#EFEEE9] text-center transition-all shadow-sm hover:shadow-md"
                aria-label="X (Twitter) Profile"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/gyimadu_" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#F5F5F1] text-black rounded-full hover:bg-[#EFEEE9] text-center transition-all shadow-sm hover:shadow-md"
                aria-label="Instagram Profile"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/michael-gyimadu" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#F5F5F1] text-black rounded-full hover:bg-[#EFEEE9] text-center transition-all shadow-sm hover:shadow-md"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="mb-2">Last Updated: January 2025</p>
            <p>© {new Date().getFullYear()} Michael Gyimadu.</p>
        </footer>
      </main>
    </div>
  );
} 