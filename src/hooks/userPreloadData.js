import { useEffect } from 'react';

export const usePagePreload = () => {
  useEffect(() => {
    // Preload all pages after initial load
    const preloadPages = async () => {
      const pages = [
        import('../pages/AboutPage'),
        import('../pages/ProjectsPage'),
        import('../pages/SkillsPage'),
        import('../pages/ContactPage')
      ];
      
      await Promise.allSettled(pages.map(page => page));
    };

    const timer = setTimeout(preloadPages, 2000);
    return () => clearTimeout(timer);
  }, []);
};