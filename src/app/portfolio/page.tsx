'use client';
import Header from '@/components/Header';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
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
      title: "Portfolio Simulation & Backtest Engine",
      description: "A multi-asset portfolio construction and backtesting engine for major ETFs. Enables custom ETF portfolio builds, backtesting, and performance tracking over 25 years of historical data // still under construction",
      tools: ["Python", "yFinance", "Pandas", "NumPy", "Matplotlib"],
      link: "https://github.com/gyimadu/portfolio-backtest-engine"
    },
    {
      title: "Macro Signal Builder",
      description: "A macroeconomic analysis engine designed to simulate recessionary vs expansionary impacts on equities, bonds, and commodities using lagging and leading macro indicators, and translate them into rule-basedinvestment signals.",
      tools: ["Python", "Pandas", "NumPy", "Fred API", "Matplotlib", "Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/gyimadu/macro-signal-builder"
    },
    {
      title: "Equity Screening Platform",
      description: "A custom-built stock screener that helps you filter and discover US equities by valuation, yield, volatility, price changes and more in a responsive user-friendly interface.",
      tools: ["Python", "FastAPI", "PostgreSQL", "Next.js", "TypeScript", "Tailwind CSS"],
      image: {
        desktop: "/bultrade.png",
        mobile: "/bultrade.png"
      },
      link: "https://bull-app.vercel.app/screener"
    },
    {
      title: "ConvertiGo",
      description: "A command-line currency converter built in C++ that provides real-time exchange rates for major global currencies. Features include interactive menu-driven interface, historical rate tracking, and support for major world currencies with accurate conversion calculations.",
      tools: ["C++", "STL", "File I/O", "CLI", "cURL", "JSON"],
      link: "https://github.com/gyimadu/currency-converter"
    },
    {
      title: "TidyTable",
      description: "TidyTable is a Python-based data cleaning automation tool that speeds up the data cleaning process for large datasets. Performs commom data preprocessings tasks like duplicates removals, missing value imputations, outliers detection, and standardizing data formats.",
      tools: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      image: {
        desktop: "/tidytable.jpeg",
        mobile: "/tidytable.jpeg"
      },
      link: "https://data-cleaning-automation.onrender.com/"
    },
    {
      title: "Credit Default Prediction Model",
      description: "Developed a simple logistic regression model to predict loan default probabilities of credit card clients using a synthetic dataset of 30,000+ records. The model includes comprehensive data preprocessing, feature engineering, and handling of imbalanced classes using SMOTENC.",
      tools: ["Python", "Scikit-learn", "Pandas", "NumPy", "SMOTE", "Matplotlib"],
    },
    {
      title: "Grit: Workout Tracking App",
      description: "A minimalist web application for tracking workouts. This web app features personalized workout suggestions, visual streak tracking, and a mobile-optimized interface for easy progress monitoring.",
      tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      image: {
        desktop: "/habits.png",
        mobile: "/habits.png"
      },
      link: "https://habits-io.vercel.app/"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 relative">
        <div className="w-full">          
          <div className="space-y-16 lg:space-y-32">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-section"
                data-index={index}
              >


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
                    <h3 className="text-2xl md:text-4xl font-bold mb-4 uppercase font-mouse">{project.title}</h3>
                    <div className="text-gray-500 text-base md:text-lg mb-4">{project.description}</div>

                    {project.tools && (
                      <div className="mb-4">
                        <div className="text-sm text-gray-600 mb-2">Tools:</div>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, toolIndex) => (
                            <span
                              key={toolIndex}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Mobile image between description and link */}
                    <div className="lg:hidden mb-6">
                      {project.image && (
                        <div className="w-full">
                          <div className="relative">
                            <Image
                              src={project.image.mobile}
                              alt={project.title}
                              width={300}
                              height={680}
                              className="w-full h-auto border-2 border-gray-200 rounded-lg"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {project.title === "Equity Screening Platform" || project.title === "Habits: Anonymous Habit Tracking App" ? "View Project" : "View Project"}
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
          <div className="mb-2">Last Updated: July 2025</div>
          <div>© {new Date().getFullYear()} Michael Gyimadu.</div>
        </footer>
      </main>
    </div>
  );
} 