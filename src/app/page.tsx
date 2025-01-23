'use client';
import Header from '@/components/Header';
import { FaGithub, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

export default function Home() {
  
  const interests = [
    "Startups",
    "Fitness",
    "Mathematical Modelling",
    "Sheet Music",
    "Algorithmic Trading",
    "Robotics & AI",
    "Financial Modelling",
    "Investment Research",
    "Travel",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-5xl mx-auto px-8 sm:px-4 py-16">
        <section className="mb-12">
          <div className="mb-10">
            <div className="flex flex-col lg:flex-row lg:gap-16 lg:items-start">
              <div className="flex flex-col items-left lg:mb-0 lg:w-1/5 lg:sticky lg:top-24">
                {/*<Image 
                  src="/profile.jpeg" 
                  alt="Michael Gyimadu" 
                  width={80}
                  height={80}
                  className="w-20 h-20 ounded-full object-cover shadow-sm mb-5"
                />*/}
                <div className='text-xl font-medium sm:text-2xl lg:text-2xl mb-6 text-black'>Connect With Me</div>
              </div>

              <div className="lg:w-4/5">
                <div className="text-black text-sm sm:text-sm lg:text-base leading-relaxed mb-2">
                  Hey there! I&apos;m a data scientist and a freelance web developer based in the United States.<br /><br />
                  Many of my projects are cross-domain tech, but I mostly enjoy working on predictive modeling for financial data using machine learning and data science.<br /><br />
                  I&apos;m currently completing my undergraduate degree in Math and Economics, and love to play soccer in my spare time. <br /><br />
                </div>
                
                
                {/*<p className="text-black text-lg sm:text-xl lg:text-xl leading-relaxed mb-6">
                  Hey there! I&apos;m a machine learning-in-finance enthusiast, a self-taught programmer, and a data scientist based in the United States.
                </p>

                <p className="text-black text-lg sm:text-xl lg:text-xl leading-relaxed mb-6">
                  I&apos;m currently finishing my undergraduate studies in Mathematics and Economics and enjoy working on predictive modelling on financial data with machine learning and data science.
                </p>

                <p className="text-black text-lg sm:text-xl lg:text-xl leading-relaxed mb-6">
                  I have interests in quant finance and software development and love playing soccer or working on web apps in my spare time.
                </p>*/}

                <div className="mb-10">
                  <div className="text-black text-sm md:text-base mb-6 text-left lg:text-left">
                    Here are a few of my other interests:
                  </div>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-4 py-2 bg-gray-50 text-black rounded-full text-xs sm:text-sm lg:text-sm cursor-default hover:bg-gray-100 shadow-sm transition-all"
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
            <div className="text-xl font-medium sm:text-2xl lg:text-2xl mb-6 text-black">Contact Me</div>
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
          <div className="text-xl font-medium sm:text-2xl lg:text-2xl text-black mb-8">Publications?</div>
          <div className="text-black text-sm sm:text-lg lg:text-base leading-relaxed mb-6">
            Updates coming soon...
          </div>
        </section>

        <footer className="text-center border-t sm:border-t-0 border-gray-200 pt-8 text-black text-xs pb-8">
          <div className='mb-2 text-gray-400 italic'>Please hire me ^_^</div>
          <div className="mb-2">Last Updated: January 2025</div>
          <div>© {new Date().getFullYear()} Michael Gyimadu.</div>
        </footer>
      </main>
    </div>
  );
}
