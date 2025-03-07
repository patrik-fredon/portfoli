import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background mesh gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 
        dark:from-gray-900 dark:to-gray-800 -z-10" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <div className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Portfolio Section */}
        <PortfolioSection />

        {/* Contact Section */}
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 dark:text-gray-400 text-sm">
        <div className="container mx-auto">
          © {new Date().getFullYear()} Professional Portfolio. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
