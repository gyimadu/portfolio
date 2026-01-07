'use client';
import Header from '@/components/Header';
import Image from 'next/image';

export default function About() {
  // Experience data - easy to edit later
  const experiences = [
    {
      logo: '/aetna-logo.png', // Add Aetna logo to /public folder
      logoBg: 'bg-white',
      role: 'Incoming Actuarial Analyst Intern',
      company: 'Aetna, a CVS Health Company',
      dates: 'Summer 2026',
    },
    {
      logo: '/meridian-logo.png', // Add Meridian logo to /public folder
      logoBg: 'bg-blue-500',
      role: 'Founder & CPO',
      company: 'Meridian',
      dates: '2025 - NOW',
    },
    {
      logo: '/soa-logo.jpg', // Add Society of Actuaries logo to /public folder
      logoBg: 'bg-black',
      role: 'STUDENT AMBASSADOR',
      company: 'Society of Actuaries',
      dates: '2026 - NOW',
    },
    {
        logo: '/wingate-logo.jpeg', // Add Wingate University logo to /public folder
        logoBg: 'bg-blue-300',
        role: 'STUDENT INVESTMENT ANALYST',
        company: 'Wingate University Investment Club',
        dates: '2024 - NOW',
      },
    {
      logo: '/wingate-logo.jpeg', // Add Wingate University logo to /public folder
      logoBg: 'bg-blue-300',
      role: 'DATA OPERATIONS/ ILL ASSISTANT',
      company: 'Wingate University',
      dates: '2023 - NOW',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="max-w-3xl mx-auto px-6 md:px-4 py-16 relative">
        <div className="w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-16 uppercase font-mouse">About</h1>
          
          {/* Experience Section */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 uppercase font-mouse">Experience</h2>
            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <div key={index}>
                  <div className="flex items-center gap-6 py-6">
                    {/* Logo */}
                    <div className={`${exp.logoBg} w-10 md:w-16 h-10 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      {exp.logo ? (
                        <div className="relative w-16 h-16">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-fill rounded-xl"
                            onError={(e) => {
                              // Hide image if it fails to load
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                      ) : (
                        <div className="w-8 md:w-12 h-8 md:h-12 bg-black rounded"></div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex items-center justify-between">
                      <div className="flex-1">
                        <div className="text-xs md:text-sm text-gray-400 mb-1.5 uppercase tracking-wide font-sans">
                          {exp.role}
                        </div>
                        <div className="text-base md:text-xl font-serif text-white" style={ {fontFamily: 'Rethink Sans'} }>
                          {exp.company}
                        </div>
                      </div>
                      <div className="text-xs md:text-sm text-gray-400 font-sans">
                        {exp.dates}
                      </div>
                    </div>
                  </div>
                  
                  {/* Horizontal line separator */}
                  {index < experiences.length - 1 && (
                    <div className="border-t border-gray-800"></div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className='mb-20'>
              <h2 className="text-2xl md:text-3xl font-bold mb-12 uppercase font-mouse">Research + Publications & Preprints</h2>
              <div className='mb-10'>
                <h3 className='font-bold text-md mb-5 underline underline-offset-2'>CURRENT</h3>
                <div className='text-white text-base font-bold leading-relaxed md:text-lg mb-2'>Comparing Classical vs Deep-Learning Factor-Extraction Models for High-Dimensional Portfolio Risk Management. <br/>Advised by Prof. Lisa Leonetti Schwartz</div>

              </div>

              <div className="mb-10">
                    <h3 className='font-bold text-md mb-5 underline underline-offset-2'>PAST</h3>
                    {/* <div className="text-base md:text-base font-extrabold mb-1 text-black">Matrix Decomposition + Eigenvalue Theory</div> */}
                    <div className="text-white text-base font-bold leading-relaxed md:text-lg mb-2">A Comparative Analysis of Principal Component Analysis and Singular Value Decomposition as Dimensionality Reduction Techniques<br/><span className='font-light text-base md:text-lg leading-relaxed'>Michael Gyimadu, Gregory Bell, Ph.D.</span></div>
                      <a
                        href="https://arxiv.org/abs/2506.16663"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-blue-600 hover:text-blue-400 transition-colors border border-gray-200 rounded-md px-5 py-2 text-sm md:text-base font-medium mt-1"
                      >
                        Paper
                      </a>
                  </div>
          </section>
        </div>
      </main>
    </div>
  );
}

