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
import CookieConsent from './components/CookieConsent';
import OfflineIndicator from './components/OfflineIndicator';
import Breadcrumb from './components/Breadcrumb';
import MouseGlow from './components/MouseGlow';
import ReadingProgress from './components/ReadingProgress';
import SocialShare from './components/SocialShare';
import KeyboardShortcuts from './components/KeyboardShortcuts';
import { CopyToast } from './components/CopyToClipboard';
import BackButton from './components/BackButton';
import VisitorCounter from './components/VisitorCounter';
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
  const showBreadcrumb = location.pathname !== '/';
  
  return (
    <LanguageTransition>
      <div className="min-h-screen flex flex-col selection:bg-blue-500/30">
        <Navbar />
        {showBreadcrumb && <Breadcrumb />}
        {showBreadcrumb && <BackButton />}
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
        <SocialShare />
        <VisitorCounter />
      </div>
    </LanguageTransition>
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Router>
          <ReadingProgress />
          <LoadingBar />
          <ScrollToTop />
          <LanguageSelector />
          <OfflineIndicator />
          <MouseGlow />
          <KeyboardShortcuts />
          <CopyToast />
          <AppContent />
          <CookieConsent />
        </Router>
      </LanguageProvider>
    </ErrorBoundary>
  );
};

export default App;
