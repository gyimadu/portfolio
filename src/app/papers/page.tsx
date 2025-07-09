'use client';
import Header from '@/components/Header';
// import { FaGithub, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';
// import { FaXTwitter } from 'react-icons/fa6';

export default function Papers() {
  
  const projects = [
    {
      title: "Mathematical Foundations of ML",
      description: "A Comparative Analysis of Principal Component Analysis and Singular Value Decomposition as Dimensionality Reduction Techniques.",
      link: "https://arxiv.org/abs/2506.16663"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-16 relative">
        <div className="w-full">          
          <div className="space-y-16 md:space-y-24">
            {projects.map((paper, index) => (
                <div
                    key={index}
                    className="paper-section"
                    data-index={index}
                >
                    <div className="w-full">
                        <h3 className="text-2xl md:text-4xl font-bold mb-4 uppercase font-mouse">{paper.title}</h3>
                        <div className="text-gray-500 text-base md:text-lg mb-2">{paper.description}</div>

                        {paper.link && (
                        <a
                            href={paper.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            [ 📄 View Paper ]
                        </a>
                        )}
                    </div>
                </div>
            ))}
          </div>
        </div>

        {/* Centered footer
        <footer className="border-t sm:border-t-0 border-gray-200 pt-8 text-center text-black text-xs pb-8 mt-16">
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
          <div className="mb-2">Last Updated: January 2025</div>
          <div>© {new Date().getFullYear()} Michael Gyimadu.</div>
        </footer> */}
      </main>
    </div>
  );
} 