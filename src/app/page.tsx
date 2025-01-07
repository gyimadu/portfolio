'use client';
import { useRef } from 'react';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import Image from 'next/image';

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);
  
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

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <section className="mb-12">
          <div className="mb-10">
            <div className="flex flex-col items-center mb-8">
              <Image 
                src="/profile.jpeg" 
                alt="Michael Gyimadu" 
                width={112}
                height={112}
                className="rounded-full object-cover shadow-sm mb-6"
              />
              <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl text-black">
                Hi, I&apos;m Michael.
              </h1>
            </div>
            
            <p className="text-black text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
              I&apos;m a machine learning-in-finance enthusiast, and a self-taught programmer based in the United States. I&apos;m currently finishing my undergraduate studies in Mathematics and Economics and enjoy working on predictive modelling on financial data with machine learning and data science.
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
                    className="px-4 py-2 bg-[#F5F5F1] text-black rounded-full text-base sm:text-lg cursor-default hover:bg-[#EFEEE9] shadow-sm transition-all"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-black">Let&apos;s Work Together</h3>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-8">
              <a 
                href="/resume.pdf" 
                target='_blank'
                className="px-5 py-2 bg-[#F5F5F1] text-black rounded-full text-base sm:text-lg hover:bg-[#EFEEE9] text-center transition-all shadow-sm hover:shadow-md"
              >
                View My Resume
              </a>
              <button 
                onClick={scrollToContact}
                className="px-5 py-2 bg-[#F5F5F1] text-black rounded-full text-base sm:text-lg hover:bg-[#EFEEE9] text-center transition-all shadow-sm hover:shadow-md"
              >
                Send a Message
              </button>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-black mb-8">Some Stuff I&apos;ve Worked On</h2>
          
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-black mb-8">Publications?</h2>
          <p className="text-black text-base sm:text-lg lg:text-xl leading-relaxed mb-6">Updates coming soon...</p>
        </section>

        <section ref={contactRef} className="mb-16">
          <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-black mb-8">Get In Touch With Me!</h2>
          
          <form 
            action="https://formspree.io/f/mbllpppa"
            method="POST"
            className="space-y-8"
          >
            <div className="space-y-3">
              <label htmlFor="name" className="block text-black text-lg">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-5 py-3 bg-[#F5F5F1] text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E5E4DF] text-base sm:text-lg"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-3">
              <label htmlFor="email" className="block text-black text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-5 py-3 bg-[#F5F5F1] text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E5E4DF] text-base sm:text-lg"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-3">
              <label htmlFor="message" className="block text-black text-lg">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-5 py-3 bg-[#F5F5F1] text-black rounded-lg shadow-smfocus:outline-none focus:ring-2 focus:ring-[#E5E4DF] text-base sm:text-lg"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>

        <footer className="text-center text-gray-500 text-sm pb-8">
          <p className="mb-2">Last Updated: January 2025</p>
          <p>© {new Date().getFullYear()} Michael Gyimadu.</p>
        </footer>
      </main>
    </div>
  );
}
