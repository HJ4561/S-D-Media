import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { TrustedBy } from './sections/TrustedBy';
import { WineShowcase } from './sections/WineShowcase';
import { Museum } from './sections/Museum';
import { Portfolio } from './sections/Portfolio';
import { VideoTestimonials } from './sections/VideoTestimonials';
import { Pricing } from './sections/Pricing';
import { TextReviews } from './sections/TextReviews';
import { ContactForm } from './sections/ContactForm';
import { Footer } from './sections/Footer';
import { Preloader } from './components/Preloader';
import { ScrollToTop } from './components/ScrollToTop';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { TeamPage } from './pages/TeamPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <Router>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      <div className={`min-h-screen bg-[#222120] ${isLoading ? 'overflow-hidden max-h-screen' : ''}`}>
        <Navigation />

        <Routes>
          {/* Main Page */}
          <Route
            path="/"
            element={
              <main>
                <Hero isReady={!isLoading} />
                <TrustedBy />
                <WineShowcase />
                <Museum />
                <Portfolio />
                <VideoTestimonials />
                <Pricing />
                <TextReviews />
                {/* Team removed from here */}
                <ContactForm />
              </main>
            }
          />

          {/* Team Page */}
          <Route path="/team" element={<TeamPage />} />
        </Routes>

        <Footer />
        <ScrollToTop />
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;