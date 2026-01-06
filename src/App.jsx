import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Main App component - root layout for the portfolio
 * Structure:
 * - Fixed navigation sidebar (Navbar)
 * - Full-width hero section (Intro)
 * - Constrained main content (Projects, Contact, Footer)
 */
export default function App() {
  return (
    <div className="relative">
      {/* Fixed navigation sidebar - visible on large screens */}
      <Navbar />

      {/* Full-width hero/intro section */}
      <Intro />

      {/* Constrained main content wrapper for better readability */}
      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}