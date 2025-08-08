import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TimeShiftButton } from "@/components/TimeShiftButton";
import heroBg from "@/assets/hero-bg.jpg";

const LandingPage = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-dark" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Title */}
          <h1 className="text-hero font-heading font-black text-cosmic mb-6">
            TIME<span className="text-neon">SHIFT</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl font-body">
            Experience the power to alter history and witness infinite possibilities
          </p>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-lg font-body">
            Journey through time, change pivotal moments, and explore alternate realities
          </p>

          {/* CTA Button */}
          <TimeShiftButton
            variant="hero"
            size="hero"
            onClick={() => navigate('/events')}
            className="animate-pulse-slow"
          >
            Begin Time Travel
          </TimeShiftButton>

          {/* Bottom Text */}
          <p className="text-sm text-muted-foreground/60 mt-8 font-body">
            Warning: Temporal alterations may have unexpected consequences
          </p>
        </div>

        {/* Scanning Lines Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-pulse-slow" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;