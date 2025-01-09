'use client';
import { useRef } from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

export default function Home() {
  
  const interests = [
    "Startups",
    "Applied Machine Learning",
    "Fitness",
    "Mathematical Modelling",
    "Sheet Music",
    "Applied Math Research",
    "Robotics & AI",
    "Financial Modelling",
    "Investment Research",
    "Travel",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16">
        <section className="mb-12">
          <div className="mb-10">
            <div className="flex flex-col lg:flex-row lg:gap-16 lg:items-start pt-15">
              <div className="flex flex-col items-center mb-8 lg:mb-0 lg:w-1/5 lg:sticky lg:top-24">
                <Image 
                  src="/profile.jpeg" 
                  alt="Michael Gyimadu" 
                  width={100}
                  height={100}
                  className="rounded-full object-cover shadow-sm mb-6"
                />
              </div>

              <div className="lg:w-4/5">
                <p className="text-black text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
                  Hey there! I&apos;m a machine learning-in-finance enthusiast, a self-taught programmer, and a data scientist based in the United States.
                </p>

                <p className="text-black text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
                  I&apos;m currently finishing my undergraduate studies in Mathematics and Economics and enjoy working on predictive modelling on financial data with machine learning and data science.
                </p>

                <p className="text-black text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
                  I have interests in quant finance and software development and love playing soccer or working on web apps in my spare time.
                </p>

                <div className="mb-10">
                  <h2 className="text-black text-md md:text-xl mb-6">
                    Here are a few other things that interest me:
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-4 py-2 bg-gray-50 text-black rounded-full text-base sm:text-lg cursor-default hover:bg-gray-100 shadow-sm transition-all"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-black">Connect With Me</h3>
            <p className="text-black text-md sm:text-lg lg:text-xl leading-relaxed mb-6">Want to learn more about my work or interested in hiring me for a project? Feel free to reach out to me here:</p>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-4">
              <a 
                href="/resume.pdf" 
                target='_blank'
                className="px-4 py-1.5 bg-gray-50 text-black rounded-full text-base sm:text-base lg:text-lg hover:bg-gray-100 text-center transition-all shadow-sm hover:shadow-md"
              >
                View My Resume
              </a>
              <Link
                href="/contact"
                className="px-4 py-1.5 bg-gray-50 text-black rounded-full text-base sm:text-base lg:text-lg hover:bg-gray-100 text-center transition-all shadow-sm hover:shadow-md"
              >
                Send a Message
              </Link>
            </div>
            <div className="flex justify-center md:gap-8 mb-4">
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
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-black mb-8">Publications?</h2>
          <p className="text-black text-base sm:text-lg lg:text-xl leading-relaxed mb-6">Updates coming soon...</p>
        </section>

        <footer className="text-center text-gray-500 text-sm pb-8">
          <p className="mb-2">Last Updated: January 2025</p>
          <p>© {new Date().getFullYear()} Michael Gyimadu.</p>
        </footer>
      </main>
    </div>
  );
}
