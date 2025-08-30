import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout/Layout';
import LoadingSpinner from './components/Ui/LoadingSpinner';
import { usePagePreload } from './hooks/userPreloadData';
import './App.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  usePagePreload(); // Preload pages after initial load

  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </Layout>
    </Router>
  );
}

export default App;
