import React from 'react';
import { BlogPostData } from '@/components/BlogPost';

// Template for creating new blog posts
// Copy this structure and add it to the blogPosts array in blogPosts.tsx

export const blogPostTemplate: BlogPostData = {
  id: 'your-blog-post-id', // Unique identifier for the post
  title: 'Your Blog Post Title',
  subtitle: 'Optional subtitle or description',
  date: 'January 20, 2025', // Publication date
  readTime: '5 min', // Estimated reading time
  featured: false, // Set to true to mark as featured
  tags: ['Tag1', 'Tag2', 'Tag3'], // Relevant tags for categorization
  content: (
    <div>
      {/* Introduction paragraph */}
      <p className="mb-6">
        Start with an engaging introduction that hooks the reader and explains what the post will cover.
        This should be 2-3 sentences that set the context for your article.
      </p>
      
      {/* Main content sections */}
      <h3 className="text-xl font-semibold mb-4 text-black">Section Title</h3>
      <p className="mb-6">
        Your content goes here. Use proper paragraph spacing with mb-6 class for consistent spacing.
        You can include multiple paragraphs to build your argument or explain concepts.
      </p>
      
      {/* Lists */}
      <h3 className="text-xl font-semibold mb-4 text-black">Key Points</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>First key point with detailed explanation</li>
        <li>Second key point with supporting information</li>
        <li>Third key point that reinforces your main argument</li>
      </ul>
      
      {/* Code blocks (if needed) */}
      <h3 className="text-xl font-semibold mb-4 text-black">Code Example</h3>
      <pre className="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
        <code>
          {`// Your code example here
function example() {
  return "Hello World";
}`}
        </code>
      </pre>
      
      {/* Conclusion */}
      <h3 className="text-xl font-semibold mb-4 text-black">Conclusion</h3>
      <p className="mb-6">
        Wrap up your post with a strong conclusion that summarizes key takeaways
        and potentially points to next steps or related topics.
      </p>
      
      {/* Call to action (optional) */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <p className="text-blue-800">
          <strong>Pro Tip:</strong> You can add callout boxes like this to highlight important information,
          tips, or warnings to your readers.
        </p>
      </div>
    </div>
  )
};

// Usage instructions:
// 1. Copy the template structure above
// 2. Replace the placeholder values with your actual content
// 3. Add the new post to the blogPosts array in blogPosts.ts
// 4. The post will automatically appear on your blog page

// Example of how to add a new post to blogPosts.tsx:
/*
export const blogPosts: BlogPostData[] = [
  // ... existing posts ...
  {
    id: 'my-new-post',
    title: 'My New Blog Post',
    subtitle: 'A brief description',
    date: 'January 25, 2025',
    readTime: '7 min',
    tags: ['Technology', 'Programming'],
    content: (
      <div>
        <p className="mb-6">
          Your content here...
        </p>
      </div>
    )
  }
];
*/ 