import { useEffect, useState } from 'react';

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll('.project-section');

    const handleScroll = () => {
      const viewportMiddle = window.innerHeight / 2;
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        const sectionMiddle = rect.top + rect.height / 2;

        // If the middle of the section is within the middle portion of the viewport
        if (rect.top < viewportMiddle && rect.bottom > viewportMiddle) {
          setActiveSection(i);
          return;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
} 