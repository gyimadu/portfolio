'use client';
import Header from '@/components/Header';
import { FaGithub, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';

export default function Portfolio() {
  
  const projects = [
    /*{
      title: "AlgoTrade Bot with Risk Management",
      description: "Developed a lightweight algorithmic trading bot that uses historical financial data to automate trading decisions using moving average crossover strategies. The bot is deisgned for small-scale algorithmic trading and integrates risk management techniques to optimize positions and minimize losses.",
      features: ["Features: Market data integration, signal generation, automated portfolio updates, risk management"],
      tools: ["Tools: Python, Pandas, NumPy, yFinance, Object-Oriented Programming"]
    },*/
    {
      title: "Macro Signal Builder",
      description: "Built a macro signal builder that analyzes real economic indicators: GDP growth, inflation, unemployment, and interest rates, applies them across historical data for different asset classes and translates them into rule-based investment signals.",
      link: "https://github.com/gyimadu/macro-signal-builder"
    },
    {
      title: "Equity Screening Platform",
      description: "A custom-built stock screener that helps you filter and discover US equities by valuation, yield, volatility, price changes and more in a responsive user-friendly interface. Built in Pythonwith FastAPI, PostgreSQL, and Next.JS.",
      image: {
        desktop: "/bultrade.png",
        mobile: "/bultrade.png"
      },
      link: "https://bull-app.vercel.app/screener"
    },
    {
      title: "TidyTable",
      description: "TidyTable is a Python-based data cleaning automation tool that speeds up the data cleaning process for large datasets. Performs commom data preprocessings tasks like duplicates removals, missing value imputations, outliers detection, and standardizing data formats.",
      image: {
        desktop: "/tidytable.jpeg",
        mobile: "/tidytable.jpeg"
      },
      link: "https://data-cleaning-automation.onrender.com/"
    },
    {
      title: "Habits: Anonymous Habit Tracking App",
      description: "A minimalist web application for tracking daily habits without the friction of account creation. The app uses local storage for data persistence, allows users to maintain streaks, and ensures user privacy all in a simplified habit-tracking interface.",
      image: {
        desktop: "/habits.png",
        mobile: "/habits-phone.jpeg"
      },
      link: "https://habits-io.vercel.app/"
    },
    {
      title: "Credit Default Prediction Model",
      description: "Developed a simple logistic regression model to predict loan default probabilities of credit card clients using a synthetic dataset of 30,000+ records. The model includes comprehensive data preprocessing, feature engineering, and handling of imbalanced classes using SMOTENC.",
      tools: ["Tools: Python, SMOTENC, Pandas, Scikit-learn."],
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-16 relative">
        <div className="w-full">          
          <div className="space-y-16 lg:space-y-32">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-section"
                data-index={index}
              >
                <div className="lg:hidden mb-4">
                  {project.image && (
                    <div className="w-full">
                      <div className="relative">
                        <Image
                          src={project.image.mobile}
                          alt={project.title}
                          width={300}
                          height={680}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="md:flex md:gap-8 md:items-start">
                  {project.image && (
                    <div className="hidden md:block md:w-1/2">
                      <div className="relative">
                        <Image
                          src={project.image.desktop}
                          alt={project.title}
                          width={800}
                          height={600}
                          className="shadow-sm w-full h-[320px]"
                        />
                      </div>
                    </div>
                  )}

                  <div className="lg:w-1/2">
                    <h3 className="text-xl md:text-3xl font-bold mb-4 font-sans">{project.title}</h3>
                    <div className="text-black text-lg md:text-xl mb-2">{project.description}</div>
                    
                    {project.tools && project.tools.map((tool, idx) => (
                      <div key={idx} className="text-black text-lg md:text-base mb-2">{tool}</div>
                    ))}

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {project.title === "Equity Screening Platform" || project.title === "Habits: Anonymous Habit Tracking App" ? "Check it out" : "View Project"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Centered footer */}
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
        </footer>
      </main>
    </div>
  );
} 