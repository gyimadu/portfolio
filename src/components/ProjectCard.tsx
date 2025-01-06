'use client';
import { useState } from 'react';

interface ProjectProps {
  title: string;
  description: string;
  features: string[];
  tools: string[];
  image?: {
    desktop: string;
    mobile: string;
  };
  link?: {
    url: string;
    text: string;
  };
}

export default function ProjectCard({ title, description, features, tools, image, link }: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      onClick={() => setIsExpanded(!isExpanded)}
      className={`
        bg-[#F5F5F1] p-8 rounded-2xl cursor-pointer 
        transition-all duration-300 ease-in-out
        hover:bg-[#EFEEE9] shadow-sm hover:shadow-md
        ${isExpanded ? 'ring-1 ring-[#E5E4DF]' : ''}
      `}
    >
      <h3 className="font-bold text-xl sm:text-2xl lg:text-2xl text-black mb-4">{title}</h3>
      
      <div className={`
        overflow-hidden transition-all duration-300
        ${isExpanded ? 'max-h-[2000px]' : 'max-h-[84px]'}
      `}>
        <p className="text-black text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
          {description}
        </p>

        <ul className="text-black text-base sm:text-lg lg:text-xl leading-relaxed space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
          {tools.map((tool, index) => (
            <li key={`tool-${index}`}>{tool}</li>
          ))}
        </ul>

        {image && link && (
          <div className="mb-6 rounded-lg overflow-hidden">
            <a 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="block transition-transform hover:scale-[1.02] duration-300"
            >
              <img 
                src={image.mobile}
                alt={title}
                className="w-full object-cover rounded-lg shadow-sm md:hidden"
              />
              <img 
                src={image.desktop}
                alt={title}
                className="hidden md:block w-full object-cover rounded-lg shadow-sm"
              />
            </a>
          </div>
        )}

        {link && (
          <a 
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-gray-600 transition-colors text-base sm:text-lg inline-block"
            onClick={(e) => e.stopPropagation()}
          >
            [{link.text}] →
          </a>
        )}
      </div>

      <div className="flex justify-center mt-3">
        <span className="text-black text-sm sm:text-base">
          {isExpanded ? 'Click to collapse' : 'Click to expand'}
        </span>
      </div>
    </div>
  );
} 