import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Culture from './pages/Culture';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LanguageSelector from './components/LanguageSelector';
import PageTransition from './components/PageTransition';
import LanguageTransition from './components/LanguageTransition';
import LoadingBar from './components/LoadingBar';
import ScrollToTopButton from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import { LanguageProvider } from './contexts/LanguageContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const AppContent: React.FC = () => {
  const location = useLocation();
  
  return (
    <LanguageTransition>
      <div className="min-h-screen flex flex-col selection:bg-blue-500/30">
        <Navbar />
        <main id="main-content" className="flex-grow" role="main">
          <PageTransition key={location.pathname}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/culture" element={<Culture />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </LanguageTransition>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Router>
          <LoadingBar />
          <ScrollToTop />
          <LanguageSelector />
          <AppContent />
        </Router>
      </LanguageProvider>
    </ErrorBoundary>
  );
};

export default App;
