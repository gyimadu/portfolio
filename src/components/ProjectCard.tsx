'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  features?: string[];
  tools?: string[];
  image?: {
    desktop: string;
    mobile: string;
  };
  link?: {
    url: string;
    text: string;
  };
}

export default function ProjectCard({
  title,
  description,
  features,
  tools,
  image,
  link
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      onClick={() => setIsExpanded(!isExpanded)}
      className={`
        bg-[#F5F5F1] p-6 rounded-lg cursor-pointer
        transition-all duration-300 ease-in-out
        hover:shadow-sm
        ${isExpanded ? 'ring-1 ring-[#E5E4DF]' : 'shadow-sm'}
      `}
    >
      <h3 className="text-lg sm:text-xl font-semibold mb-4">{title}</h3>
      
      <div className={`
        overflow-hidden transition-all duration-300
        ${isExpanded ? 'max-h-[2000px]' : 'max-h-[84px]'}
      `}>
        <p className="text-gray-700 text-base sm:text-lg lg:text-xl mb-4">{description}</p>
        
        {features && features.map((feature, index) => (
          <p key={index} className="text-gray-600 text-base sm:text-lg lg:text-xl mb-2">{feature}</p>
        ))}
        
        {tools && tools.map((tool, index) => (
          <p key={index} className="text-gray-600 text-base sm:text-lg lg:text-xl mb-2">{tool}</p>
        ))}

        {image && (
          <div className="mt-6 space-y-4">
            <div className="hidden sm:block">
              <Image
                src={image.desktop}
                alt={`${title} Desktop View`}
                width={800}
                height={400}
                className="rounded-lg w-full"
              />
            </div>
            <div className="sm:hidden">
              <Image
                src={image.mobile}
                alt={`${title} Mobile View`}
                width={400}
                height={800}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        )}

        {link && (
          <div className="mt-4">
            <Link
              href={link.url}
              target="_blank"
              className="inline-block px-4 py-2 text-blue-600 rounded-lg hover:bg-gray-800 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {link.text}
            </Link>
          </div>
        )}
      </div>

      <div className="flex justify-center mt-4">
        <span className="text-gray-500 text-sm">
          {isExpanded ? 'Click to collapse' : 'Click to expand'}
        </span>
      </div>
    </div>
  );
} 