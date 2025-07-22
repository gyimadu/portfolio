'use client';
import Header from '@/components/Header';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
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
      <main className="max-w-3xl mx-auto px-6 md:px-4 py-10 md:pb-8 md:-pt-20">
        <section className="mb-12">
          <div className="mb-2">
            <div className="flex flex-col lg:flex-col lg:gap-10">
              <div className='flex flex-col justify-center text-gray-900 md:pt-0 mb-6'>
                <div className='text-3xl md:text-4xl mb-3 md:mb-3 text-gray-800 font-mouse'>
                  Hi, I&apos;m Michael!
                </div>
                <div className="flex justify-start gap-4 md:gap-6 mb-2">
                  <a 
                    href="https://github.com/gyimadu" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:bg-gray-100 text-center transition-all shadow-sm hover:shadow-md"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub className="w-4 md:w-5 h-4 md:h-5" />
                  </a>
                  <a
                    href="https://twitter.com/gyimaduu" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:bg-gray-100 text-center transition-all shadow-sm hover:shadow-md"
                    aria-label="X (Twitter) Profile"
                  >
                    <FaXTwitter className="w-4 md:w-5 h-4 md:h-5" />
                  </a>
                  <a 
                    href="https://instagram.com/gyimadu_" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:bg-gray-100 text-center transition-all shadow-sm hover:shadow-md"
                    aria-label="Instagram Profile"
                  >
                    <FaInstagram className="w-4 md:w-5 h-4 md:h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/michael-gyimadu" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:bg-gray-100 text-center transition-all shadow-sm hover:shadow-md"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin className="w-4 md:w-5 h-4 md:h-5" />
                  </a>
                </div>
                <a
                  href="https://scholar.google.com/citations?hl=en&authuser=1&user=DAStgxcAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-900 hover:text-gray-600 font-extrabold text-xs md:text-sm mb-8"
                  aria-label="Google Scholar Profile"
                >
                  <span className='underline underline-offset-4 decoration-1'>Google Scholar</span><span className="ml-1"><svg className="inline w-4 h-4 group-hover:text-blue-700 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" /></svg></span>
                </a>
                <div className='text-base md:text-base leading-normal font-medium mb-6'>
                  I study mathematics and economics at Wingate University and spend most of my time exploring applications of machine learning in financial risk management and investment decision-making.            
                </div>
                <div className='text-base md:text-base leading-normal mb-6'>
                  I build models for predictive analytics, portfolio-optimization, and signal-based trading using economic and market data.
                </div>
                <div className='text-base md:text-base leading-normal mb-6'>
                  Lately, I&apos;ve been working on <span className='underline underline-offset-4 decoration-1'><Link href="https://bull-app.vercel.app" target="_blank" rel="noopener noreferrer">Meridian</Link></span>, a fintech startup, where we&apos;re leveraging AI/ML to personalize investment strategies based on user behavior patterns.                  
                </div>
                <div className='text-base md:text-base leading-normal mb-6'>
                  Currently based between Charlotte and San Francisco.
                </div>
                <div className='text-base md:text-base leading-normal mb-6'>
                  Feel free to reach out to me through a mutual friend or via email at <a href="mailto:mi.gyimadu430@wingate.edu" className='underline underline-offset-4 decoration-1'>mi.gyimadu430@wingate.edu</a>.
                </div>


                <div className="flex flex-row gap-2 mb-8">
                  <a
                    href="/resume.pdf"
                    target='_self'
                    className="px-4 py-1.5 bg-gray-50 text-black rounded-xl text-sm hover:bg-gray-100 text-center transition-all shadow-sm hover:shadow-md"
                  >
                    View My Resume
                  </a>
                  <Link
                    href="/portfolio"
                    className="px-4 py-1.5 bg-gray-50 text-black rounded-xl text-sm hover:bg-gray-100 text-center transition-all shadow-sm hover:shadow-md"
                  >
                    View Projects
                  </Link>
                </div>

                {/* Selected Papers Section */}
                <div className="mb-8 mt-10">
                  <div className="font-bold mb-6 text-gray-900" style={{ fontFamily: 'Courier New, sans-serif' }}>
                    <p className='text-base md:text-base bg-gray-100 w-fit px-1 py-1 font-extrabold'>Selected Papers</p>
                  </div>
                  <div className="">
                    <div className="text-base md:text-base font-extrabold mb-1 text-gray-900">Matrix Decomposition + Eigenvalue Theory</div>
                    <div className="text-gray-900 text-base leading-normal md:text-base mb-2">A Comparative Analysis of Principal Component Analysis and Singular Value Decomposition as Dimensionality Reduction Techniques<br/><span className='italic'>with Gregory Bell, Ph.D.</span></div>
                    [ <a
                      href="https://arxiv.org/abs/2506.16663"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-blue-600 hover:text-blue-900 transition-colors underline underline-offset-4 decoration-1 text-sm md:text-base font-bold mt-1"
                    >
                      arXiv
                    </a> ]
                  </div>
                </div>
                {/* Past + Ongoing Projects Section */}
                <div className="mb-8 mt-10">
                  <div className="font-bold mb-6 text-gray-900" style={{ fontFamily: 'Courier New, sans-serif' }}>
                    <p className='text-base md:text-base bg-gray-100 w-fit px-1 py-1 font-extrabold'>Past + Ongoing Projects</p>
                  </div>
                  <div className="space-y-4">
                    {/* PortfolioLab */}
                    <div className="">
                      <div className="flex items-center gap-2 mb-1">
                        <a href="https://github.com/gyimadu/portfolio-backtest-engine" target="_blank" rel="noopener noreferrer" className="text-base md:text-base text-black hover:text-blue-700 transition-colors flex items-center group mb-1 underline underline-offset-4 decoration-1">
                          PortfolioLab
                          <span className="ml-1"><svg className="inline w-4 h-4 group-hover:text-blue-700 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" /></svg></span>
                        </a>
                      </div>
                      <div className="text-gray-700"><p className='leading-normal text-base md:text-base'>Multi-asset ETF portfolio builder and backtester.<br/>Allocate, simulate, and track performance.</p></div>
                    </div>
                    {/* Macro Signal Builder */}
                    <div className="">
                      <div className="flex items-center gap-2 mb-1">
                        <a href="https://github.com/gyimadu/macro-signal-builder" target="_blank" rel="noopener noreferrer" className="text-base md:text-base text-black hover:text-blue-700 transition-colors flex items-center group mb-1 underline underline-offset-4 decoration-1">
                          Macro Signal Builder
                          <span className="ml-1"><svg className="inline w-4 h-4 group-hover:text-blue-700 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" /></svg></span>
                        </a>
                      </div>
                      <div className="text-gray-700"><p className='leading-normal text-base md:text-base'>Simulates macroeconomic impacts on selected assets.<br/>Generates rule-based investment signals.</p></div>
                    </div>
                    {/* Equity Screener */}
                    <div className="">
                      <div className="flex items-center gap-2 mb-1">
                        <a href="https://bull-app.vercel.app/screener" target="_blank" rel="noopener noreferrer" className="text-base md:text-base text-black hover:text-blue-700 transition-colors flex items-center group mb-1 underline underline-offset-4 decoration-1">
                          Equity Screener
                          <span className="ml-1"><svg className="inline w-4 h-4 group-hover:text-blue-700 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" /></svg></span>
                        </a>
                      </div>
                      <div className="text-gray-700"><p className='leading-normal text-base md:text-base'>Custom stock screener for US based equities.<br/>Filter by price, valuation, yield, volatility, and more.</p></div>
                    </div>
                    {/* ConvertiGo */}
                    <div className="">
                      <div className="flex items-center gap-2 mb-1">
                          <a href="https://github.com/gyimadu/cpp-financial-toolkit/tree/main/currency_converter" target="_blank" rel="noopener noreferrer" className="text-base md:text-base text-black hover:text-blue-700 transition-colors flex items-center group mb-1 underline underline-offset-4 decoration-1">
                          ConvertiGo
                          <span className="ml-1"><svg className="inline w-4 h-4 group-hover:text-blue-700 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" /></svg></span>
                        </a>
                      </div>
                      <div className="text-gray-700"><p className='leading-normal text-base md:text-base'>C++ command-line currency converter.<br/>Real-time rates and historical rates tracking.</p></div>
                    </div>
                    {/* TidyTable */}
                    <div className="">
                      <div className="flex items-center gap-2 mb-1">
                        <a href="https://data-cleaning-automation.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-base md:text-base text-black hover:text-blue-700 transition-colors flex items-center group mb-1 underline underline-offset-4 decoration-1">
                          TidyTable
                          <span className="ml-1"><svg className="inline w-4 h-4 group-hover:text-blue-700 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" /></svg></span>
                        </a>
                      </div>
                      <div className="text-gray-700"><p className='leading-normal text-base md:text-base'>Automates data cleaning for large datasets.<br/>Handles missing values and outliers.</p></div>
                    </div>
                  </div>
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

          <PolaroidImages />
        </section>

        {/*<section className="mb-28 lg:mb-28">
          <div className="text-xl font-f1 font-medium sm:text-2xl lg:text-xl text-black mb-8">Publications?</div>
          <div className="text-black text-sm sm:text-lg lg:text-base leading-relaxed mb-6">
            Updates coming soon...
          </div>
        </section>*/}

        <footer className="text-center border-t sm:border-t-0 border-gray-200 pt-4 text-black text-xs pb-4 mt-24">
          <div className="mb-2">Last Updated: July 2025</div>
          <div>© {new Date().getFullYear()} Michael Gyimadu.</div>
        </footer>
      </main>
    </div>
  );
}
