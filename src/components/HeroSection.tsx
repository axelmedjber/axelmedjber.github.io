import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
          Discover European
          <span className="block mt-2">Fashion Contests</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Connect with top fashion brands and showcase your talent on Europe's premier fashion contest platform
        </p>
        <Button 
          size="lg" 
          asChild 
          className="animate-fade-up hover:scale-105 transition-transform"
          style={{ animationDelay: '0.4s' }}
        >
          <Link to="/register">Start Your Journey</Link>
        </Button>
      </div>
    </section>
  );
};