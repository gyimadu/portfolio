import React from 'react';

export interface BlogPostData {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
  tags?: string[];
  featured?: boolean;
}

interface BlogPostProps {
  post: BlogPostData;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="blog-post text-gray-500 text-left py-12 border-b border-gray-100 last:border-b-0">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-4 text-xs md:text-sm text-gray-800 mb-3">
          <time dateTime={post.date}>{post.date}</time>
          <span>•</span>
          <span>{post.readTime} read</span>
          {post.featured && (
            <>
              <span>•</span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                Featured
              </span>
            </>
          )}
        </div>
        
        <h1 className="text-2xl font-bold mb-2 text-black" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>
          {post.title}
        </h1>
        
        {post.subtitle && (
          <h2 className="text-base md:text-base font-semibold mb-4 text-black" style={{ fontFamily: 'Courier New, sans-serif' }}>
            {post.subtitle}
          </h2>
        )}
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs md:text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Content */}
      <div className="prose prose-gray text-base md:text-base text-gray-900 max-w-none" style={{ fontFamily: 'Rethink Sans, sans-serif' }}>
        {post.content}
      </div>
    </article>
  );
} 