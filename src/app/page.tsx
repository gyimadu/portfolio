'use client';
import Header from '@/components/Header';
import { FaGithub, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import NeuralNetworkBall from '@/components/NeuralNetworkBall';
import PolaroidImages from '@/components/PolaroidImages';

export default function Home() {
  
  {/*const interests = [
    "Investment Analysis & Research",
    "Sheet Music",
    "3D Design",
    "Algorithmic Trading",
    "Robotics",
    "Mathematical Modelling",
    "Travel",
    "Startups",
  ];*/}

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="md:hidden">
        <NeuralNetworkBall />
      </div>
      <main className="max-w-3xl mx-auto px-4 md:px-4 py-12 md:py-8">
        <section className="mb-12">
          <div className="mb-2">
            <div className="flex flex-col lg:flex-col lg:gap-10">
              <div className='flex flex-col justify-center text-gray-700 md:pt-0 mb-6'>
                <div className='text-2xl md:text-4xl mb-6 text-gray-800'>
                  Hi, I&apos;m Michael.
                </div>
                <div className='text-lg md:text-lg mb-6'>
                  I&apos;m a junior studying math and economics at Wingate University. I study how machine learning and other computational methods can be applied to financial theory to improve risk management and investment decision-making.            
                </div>
                <div className='text-lg md:text-lg mb-6'>
                  I&apos;ve built predictive models, portfolio optimization algorithms, and signal-based trading strategies to simulate and assess market behavior using real financial data. My work spans model development, backtesting, and performance assessment.
                </div>
                <div className='text-lg md:text-lg mb-6'>
                  Lately, I&apos;ve been exploring how adaptive systems can be used to personalize investment strategies based on user behavior patterns, and currently working on behavioral modeling at an early-stage fintech startup.                  
                </div>
                <div className='text-lg md:text-lg mb-6'>
                  Currently to-and-from Charlotte and San Francisco.
                </div>
                <div className='text-lg md:text-lg mb-6'>
                  Reach out to me <Link href="/contact" className='text-blue-600'>here</Link> or through email at <a href="mailto:mkwabenagyimadu@gmail.com" className='text-blue-600'>mkwabenagyimadu@gmail.com</a>.
                </div>
              </div>

              {/*<div className="mb-10">
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
              </div>*/}
            </div>
          </div>

          <div className="mb-10">
            <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-4 sm:space-y-0 mb-20">
              <a
                href="/resume.pdf"
                target='_blank'
                className="px-4 py-1.5 bg-gray-50 text-black rounded-xl text-sm sm:text-base lg:text-sm hover:bg-gray-100 text-center transition-all shadow-sm hover:shadow-md"
              >
                View My Resume
              </a>
              <Link
                href="/portfolio"
                className="px-4 py-1.5 bg-gray-50 text-black rounded-xl text-sm sm:text-base lg:text-sm hover:bg-gray-100 text-center transition-all shadow-sm hover:shadow-md"
              >
                View Projects
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
            <PolaroidImages />
          </div>
        </section>

        {/*<section className="mb-28 lg:mb-28">
          <div className="text-xl font-f1 font-medium sm:text-2xl lg:text-xl text-black mb-8">Publications?</div>
          <div className="text-black text-sm sm:text-lg lg:text-base leading-relaxed mb-6">
            Updates coming soon...
          </div>
        </section>*/}

        <footer className="text-center border-t sm:border-t-0 border-gray-200 pt-4 text-black text-xs pb-4 mt-24">
          <div className="mb-2">Last Updated: May 2025</div>
          <div>© {new Date().getFullYear()} Michael Gyimadu.</div>
        </footer>
      </main>
    </div>
  );
}
