'use client';
import Header from '@/components/Header';
import { FaGithub, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

export default function Home() {
  
  const interests = [
    "Investment Analysis & Research",
    "Sheet Music",
    "3D Design",
    "Algorithmic Trading",
    "Robotics",
    "Mathematical Modelling",
    "Travel",
    "Startups",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-8 sm:px-4 py-16">
        <section className="mb-12">
          <div className="mb-10">
            <div className="flex flex-col lg:flex-col lg:gap-10">
              <div className='flex flex-col justify-center lg:pt-10 mb-6'>
                <div className='font-f1 text-3xl sm:text-3xl lg:text-4xl mb-7'>Hi,<br></br>I&apos;m Michael Gyimadu!</div>
                <div className='text-sm sm:text-lg lg:text-base'>I&apos;m a Machine Learning Researcher focused on predictive modelling for financial data.<br /><br />
                    Additionally, I&apos;m a sophomore at Wingate University, pursuing a degree in Mathematics and Economics.<br />                    
                </div>
              </div>

              <div className="mb-10">
                  <div className="text-black text-sm sm:text-lg lg:text-base mb-6 text-left lg:text-left">
                    Here are a few of my other interests:
                  </div>
                  <div className="flex flex-wrap gap-3 justify-start lg:justify-start">
                    {interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-4 py-2 bg-gray-50 text-black rounded-full text-xs sm:text-sm lg:text-xs cursor-default hover:bg-gray-100 shadow-sm transition-all"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <div className="text-xl font-medium sm:text-2xl lg:text-xl mb-6 font-f1 text-black">Contact Me</div>
            <div className="text-black text-sm sm:text-lg lg:text-base leading-relaxed mb-6">
              Want to learn more about my work or interested in hiring me for a project? Feel free to reach out to me here:
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-4">
              <a 
                href="/resume.pdf" 
                target='_blank'
                className="px-4 py-1.5 bg-gray-50 text-black rounded-xl text-sm sm:text-base lg:text-sm hover:bg-gray-100 text-center transition-all shadow-sm hover:shadow-md"
              >
                View My Resume
              </a>
              <Link
                href="/contact"
                className="px-4 py-1.5 bg-gray-50 text-black rounded-xl text-sm sm:text-base lg:text-sm hover:bg-gray-100 text-center transition-all shadow-sm hover:shadow-md"
              >
                Send a Message
              </Link>
            </div>
            <div className="flex justify-center gap-2 md:gap-4 mb-4">
              <a 
                href="https://github.com/gyimadu" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-50 text-black rounded-xl hover:bg-gray-100 text-center transition-all shadow-sm hover:shadow-md"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com/gyimaduu" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#F5F5F1] text-black rounded-xl hover:bg-[#EFEEE9] text-center transition-all shadow-sm hover:shadow-md"
                aria-label="X (Twitter) Profile"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/gyimadu_" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#F5F5F1] text-black rounded-xl hover:bg-[#EFEEE9] text-center transition-all shadow-sm hover:shadow-md"
                aria-label="Instagram Profile"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/in/michael-gyimadu" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#F5F5F1] text-black rounded-xl hover:bg-[#EFEEE9] text-center transition-all shadow-sm hover:shadow-md"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://pin.it/31jFT8j7h" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#F5F5F1] text-black rounded-xl hover:bg-[#EFEEE9] text-center transition-all shadow-sm hover:shadow-md"
                aria-label="Pinterest Profile"
              >
                <FaPinterest className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="mb-28 lg:mb-28">
          <div className="text-xl font-f1 font-medium sm:text-2xl lg:text-xl text-black mb-8">Publications?</div>
          <div className="text-black text-sm sm:text-lg lg:text-base leading-relaxed mb-6">
            Updates coming soon...
          </div>
        </section>

        <footer className="text-center font-f1 border-t sm:border-t-0 border-gray-200 pt-8 text-black text-xs pb-8">
          <div className="mb-2">Last Updated: Mar 2025</div>
          <div>© {new Date().getFullYear()} Michael Gyimadu.</div>
        </footer>
      </main>
    </div>
  );
}
