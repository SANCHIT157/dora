import React, { useState, useEffect } from 'react';

// Import UI Components
import NavItem from './components/Navitem';
import ThemeToggle from './components/ThemeToggle';

// Import View Orchestration Components
import HomeView from './components/HomeView';
import FullSectionView from './components/FullSectionView';


// --- Main App Component ---
const App = () => {
  // State to manage the currently active section for navigation highlighting
  const [activeSection, setActiveSection] = useState('home');
  // State to manage the current view: 'home' for previews, or a section ID for full view
  const [currentView, setCurrentView] = useState('home');
  // State to manage the theme: 'light' or 'dark'
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to 'light'
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    // Always default to light theme
    return 'light';
  });
  // State to manage mobile navigation menu open/close
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  // State for PWA installation prompt
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  // Effect to apply theme class to html element and save to localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]); // Rerun when theme changes

  // Effect to handle PWA install prompt
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can add to home screen
      setShowInstallButton(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        setDeferredPrompt(null);
        setShowInstallButton(false);
      });
    }
  };

  // Effect to handle scroll events for highlighting the active navigation item (only on home view)
  useEffect(() => {
    const handleScroll = () => {
      if (currentView !== 'home') return;

      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      if (window.scrollY < headerHeight + 50) {
        setActiveSection('home');
      } else {
        // This part can be simplified or removed if only 'Home' needs dynamic highlighting.
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentView]);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Function to handle navigation item click
  const handleNavClick = (sectionId) => {
    setMobileNavOpen(false); // Close mobile nav when clicking a link
    if (sectionId === 'home') {
      setCurrentView('home');
      setActiveSection('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView(sectionId);
      setActiveSection(sectionId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Function to navigate to a specific section (used by "More About This" buttons)
  const handleNavigateToSection = (sectionId) => {
    setCurrentView(sectionId);
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to go back to the home view
  const handleBackToHome = () => {
    setCurrentView('home');
    setActiveSection('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800 font-inter text-gray-800 dark:text-gray-100 flex flex-col transition-colors duration-500">
      {/* Header Section */}
      <header className="bg-blue-600 dark:bg-blue-900 shadow-lg p-4 md:p-6 flex flex-col md:flex-row items-center justify-between sticky top-0 z-50 rounded-b-xl transition-colors duration-500">
        <div className="flex items-center w-full md:w-auto justify-between gap-2 md:gap-0">
          {/* Hamburger for mobile - beside the title */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 text-white focus:outline-none order-1"
            onClick={() => setMobileNavOpen((open) => !open)}
            aria-label="Toggle navigation menu"
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-0 order-2 flex-1 text-center md:text-left">
            Doraemon Den
          </h1>
          {/* ThemeToggle for mobile only */}
          <div className="flex md:hidden order-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 w-full md:w-auto justify-end">
          <nav className="flex flex-wrap justify-center gap-3 md:gap-3">
            <NavItem label="Home" sectionId="home" activeSection={activeSection} onNavClick={handleNavClick} />
            <NavItem label="About" sectionId="about" activeSection={activeSection} onNavClick={handleNavClick} />
           <NavItem label="Video Episodes" sectionId="video-episodes" activeSection={activeSection} onNavClick={handleNavClick} />
            <NavItem label="Characters" sectionId="characters" activeSection={activeSection} onNavClick={handleNavClick} />
            <NavItem label="Places" sectionId="places" activeSection={activeSection} onNavClick={handleNavClick} />
            <NavItem label="Gadgets" sectionId="gadgets" activeSection={activeSection} onNavClick={handleNavClick} />
           <NavItem label="Discussion" sectionId="episodes" activeSection={activeSection} onNavClick={handleNavClick} />
           </nav>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </header>
      {/* Mobile Nav Dropdown - now just below the header */}
      {mobileNavOpen && (
        <nav className="fixed top-[72px] left-0 w-full bg-blue-700 dark:bg-blue-950 flex flex-col items-center gap-2 py-4 rounded-b-xl shadow-lg md:hidden z-50 animate-fade-in">
          <NavItem label="Home" sectionId="home" activeSection={activeSection} onNavClick={handleNavClick} />
          <NavItem label="About" sectionId="about" activeSection={activeSection} onNavClick={handleNavClick} />
           <NavItem label="Video Episodes" sectionId="video-episodes" activeSection={activeSection} onNavClick={handleNavClick} />
          <NavItem label="Characters" sectionId="characters" activeSection={activeSection} onNavClick={handleNavClick} />
          <NavItem label="Places" sectionId="places" activeSection={activeSection} onNavClick={handleNavClick} />
          <NavItem label="Gadgets" sectionId="gadgets" activeSection={activeSection} onNavClick={handleNavClick} />
        <NavItem label="Discussion" sectionId="episodes" activeSection={activeSection} onNavClick={handleNavClick} />
        </nav>
      )}
      {/* Main Content Area */}
      <main className="flex-grow p-4 md:p-8">
        {currentView === 'home' ? (
          <HomeView onNavigateToSection={handleNavigateToSection} />
        ) : (
          <FullSectionView sectionId={currentView} onBackToHome={handleBackToHome} />
        )}
      </main>
      {/* Floating Install App Button */}
      {showInstallButton && (
        <button
          onClick={handleInstallClick}
          className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-3 py-2 rounded-full shadow-lg text-white bg-gray-900 dark:bg-gray-950 hover:bg-gray-800 dark:hover:bg-gray-900 font-semibold text-sm transition-colors duration-300 border border-gray-800 dark:border-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Install App
        </button>
      )}

      {/* Footer Section */}
      <footer className="bg-blue-700 dark:bg-blue-950 text-white p-4 text-center text-sm rounded-t-xl mt-8 transition-colors duration-500">
        <p>&copy; 2025 Doraemon Universe Fan App. All rights reserved. Content for entertainment purposes only.</p>
      </footer>
    </div>
  );
};

export default App;