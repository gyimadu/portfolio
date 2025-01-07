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
  return (
    <div className="bg-[#F5F5F1] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg sm:text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      
      {features && features.map((feature, index) => (
        <p key={index} className="text-gray-600 text-sm mb-2">{feature}</p>
      ))}
      
      {tools && tools.map((tool, index) => (
        <p key={index} className="text-gray-600 text-sm">{tool}</p>
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
            className="inline-block px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            {link.text}
          </Link>
        </div>
      )}
    </div>
  );
} 