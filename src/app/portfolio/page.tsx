'use client';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


export default function Portfolio() {
  const projects = [
    {
      title: "TidyTable: Data Cleaning Automation Tool",
      description: "Developed a Python-based automation tool that speeds up the data cleaning process for large datasets. TidyTable is a no-code tool that intelligently handles missing values, detects outliers, and standardizes data formats, reducing manual cleaning time by up to 70% while maintaining data integrity.",
      features: ["Features: Automated cleaning, format standardization, outlier detection."],
      tools: ["Tools: Python, Pandas, NumPy, FastAPI, PostgreSQL, Regular Expressions."],
      image: {
        desktop: "/tidytable.jpeg",
        mobile: "/tidytable-phone.jpeg"
      },
      link: {
        url: "https://data-cleaning-automation.onrender.com/",
        text: "Check it out!"
      }
    },
    {
      title: "Credit Default Prediction Model",
      description: "Developed a simple logistic regression model to predict loan default probabilities of credit card clients using a synthetic dataset of 30,000+ records. The model includes comprehensive data preprocessing, feature engineering, and handling of imbalanced classes using SMOTENC.",
      features: ["Dataset: 30,000+ synthetic records."],
      tools: ["Tools: Python, SMOTENC, Pandas, Scikit-learn."],
    },
    {
      title: "Habits: Anonymous Habit Tracking App",
      description: "Built a minimalist web application for tracking daily habits without the friction of account creation. The app uses local storage for data persistence, allows users to maintain streaks, and ensures user privacy while providing a simplified habit-tracking experience.",
      features: ["Features: Streak tracking, daily logs, anonymous usage, data persistence."],
      tools: ["Tools: Next.js, TypeScript, Tailwind CSS, Local Storage API."],
      image: {
        desktop: "/habits.jpeg",
        mobile: "/habits-phone.jpeg"
      },
      link: {
        url: "https://habits-io.vercel.app/",
        text: "Check it out!"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <section className="mb-28 lg:mb-20">
          <h2 className="text-xl sm:text-2xl lg:text-2xl text-black mb-8">Portfolio</h2>
          
          <div className="grid gap-10">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
              />
            ))}
          </div>
        </section>

        <footer className="text-center text-black text-xs lg:text-sm pb-8">
            <div className="flex justify-center gap-2 md:gap-6 mb-4">
              <a 
                href="https://github.com/gyimadu" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-50 text-black rounded-full hover:bg-gray-100 text-center transition-all shadow-sm hover:shadow-md"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com/gyimaduu" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#F5F5F1] text-black rounded-full hover:bg-[#EFEEE9] text-center transition-all shadow-sm hover:shadow-md"
                aria-label="X (Twitter) Profile"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/gyimadu_" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#F5F5F1] text-black rounded-full hover:bg-[#EFEEE9] text-center transition-all shadow-sm hover:shadow-md"
                aria-label="Instagram Profile"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/in/michael-gyimadu" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#F5F5F1] text-black rounded-full hover:bg-[#EFEEE9] text-center transition-all shadow-sm hover:shadow-md"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          <div className="mb-2">Last Updated: January 2025</div>
          <div>© {new Date().getFullYear()} Michael Gyimadu.</div>
        </footer>
      </main>
    </div>
  );
} 