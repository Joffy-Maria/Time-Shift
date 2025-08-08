import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { historicalEvents, alterations } from "@/data/historicalEvents";
import { TimeShiftButton } from "@/components/TimeShiftButton";
import { RotateCcw, Share2, BookOpen, Zap } from "lucide-react";

const Results = () => {
  const navigate = useNavigate();
  const { eventId, alteration } = useParams<{ eventId: string; alteration: string }>();
  const [universeName, setUniverseName] = useState("");
  const [mounted, setMounted] = useState(false);

  const event = historicalEvents.find(e => e.id === eventId);
  const alterationData = eventId && alteration ? 
    alterations[eventId]?.find(a => a.id === alteration) : null;

  // Generate universe name and summary
  useEffect(() => {
    const generateUniverseName = () => {
      const prefixes = ["Neo", "Alpha", "Quantum", "Temporal", "Paradox", "Chrono", "Flux"];
      const suffixes = ["Prime", "Zero", "Omega", "Delta", "Sigma", "Beta", "Gamma"];
      const middle = ["Timeline", "Reality", "Dimension", "Universe", "World", "Sphere"];
      
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      const mid = middle[Math.floor(Math.random() * middle.length)];
      const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
      
      return `${prefix}-${mid}-${suffix}`;
    };

    setUniverseName(generateUniverseName());
    setMounted(true);
  }, []);

  if (!event || !alterationData) {
    return <div>Error: Event or alteration not found</div>;
  }

  const generateSummary = () => {
    const summaries = {
      "moon-landing": {
        "prevent": "In this timeline, the failure of Apollo 11 led to a decades-long space race delay. Private companies eventually took over space exploration in the 2000s, leading to a more commercialized but delayed space age. Mars colonization is still 50 years away.",
        "earlier": "The accelerated space program of the 1960s led to a Moon base by 1975 and Mars landing by 1985. Humanity became a multi-planetary species much earlier, fundamentally changing global politics and resource distribution.",
        "different-nation": "Soviet lunar supremacy reshaped the Cold War entirely. The USSR maintained technological dominance until the 1990s, leading to a very different political landscape and delayed internet development."
      },
      "light-bulb": {
        "prevent": "Without Edison's light bulb, gas lighting dominated until the 1920s. Electric lighting developed much slower, delaying urbanization and industrial progress by several decades. Cities remained smaller and less densely populated.",
        "different-inventor": "Tesla's early electrical innovations led to a completely wireless power grid by 1900. Free wireless electricity transformed society, but also led to different patent wars and corporate structures.",
        "earlier": "Earlier electrification accelerated the Industrial Revolution by 50 years. Steam power was quickly abandoned, leading to faster technological advancement but also different environmental challenges."
      },
      "printing-press": {
        "prevent": "The delay in printing technology kept knowledge restricted to the elite for centuries longer. The Renaissance was delayed by 200 years, and literacy rates remained extremely low until the 1800s.",
        "digital-leap": "Gutenberg's impossible digital printing press created an information explosion 500 years early. This led to rapid scientific advancement but also widespread misinformation and social chaos.",
        "mass-production": "Instant mass production of books created the world's first information overload crisis in the 1400s. Governments struggled to control information flow, leading to earlier democratic movements."
      },
      "berlin-wall": {
        "never-falls": "Germany remains permanently divided, with two distinct cultures evolving. The EU never forms as we know it, and the Cold War continues in a different form well into the 21st century.",
        "earlier-fall": "Earlier reunification led to a more powerful Germany economically and politically. The EU formed earlier and differently, changing global trade patterns and geopolitics.",
        "violent-fall": "The violent revolution created lasting instability in Europe. Germany struggled with internal conflicts for decades, delaying European integration and economic growth."
      },
      "electricity": {
        "prevent": "Humanity remained in a pre-electric world, relying on steam and mechanical power. The Industrial Revolution stalled, and modern technology as we know it never developed.",
        "ancient-discovery": "Ancient Egyptian electrical technology led to a completely different path of human development. Pyramid-powered cities and electromagnetic transportation reshaped all of human history.",
        "wireless-first": "Tesla-style wireless power from the 1750s created a world without power lines or grids. Energy became freely available, fundamentally changing economics and society."
      }
    };

    return summaries[eventId as keyof typeof summaries]?.[alteration as keyof typeof summaries[keyof typeof summaries]] || 
           "This alternate timeline has created profound changes that ripple through history in unexpected ways.";
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-dark-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-dark" />

      {/* Floating Success Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-secondary/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-title font-heading font-bold text-cosmic mb-4">
              Timeline Alteration Complete
            </h1>
            <p className="text-muted-foreground">
              Welcome to your newly created alternate reality
            </p>
          </div>

          {/* Results Container */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Universe Name */}
            <div className="bg-card border border-primary/30 rounded-xl p-8 text-center shadow-cosmic">
              <h2 className="text-3xl font-heading font-bold text-primary mb-2">
                {universeName}
              </h2>
              <p className="text-muted-foreground">Your Alternate Universe</p>
            </div>

            {/* Chaos Score */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-neon">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-heading font-bold text-foreground flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-secondary" />
                  Chaos Score
                </h3>
                <div className="text-right">
                  <div className="text-3xl font-heading font-bold text-secondary">
                    {alterationData.chaosLevel}/100
                  </div>
                  <div className="text-sm text-muted-foreground">Temporal Impact</div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="bg-gradient-secondary h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${alterationData.chaosLevel}%` }}
                />
              </div>
              
              <p className="text-sm text-muted-foreground mt-3">
                {alterationData.chaosLevel < 50 ? "Minor ripple effects through history" :
                 alterationData.chaosLevel < 75 ? "Significant historical changes" :
                 "Massive temporal disruption"}
              </p>
            </div>

            {/* Wikipedia Summary */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-neon">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-primary" />
                Alternate History Summary
              </h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {generateSummary()}
                </p>
              </div>
            </div>

            {/* Original vs Altered */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h4 className="font-heading font-bold text-foreground mb-3">Original Event</h4>
                <p className="text-sm text-muted-foreground mb-2">{event.title} ({event.year})</p>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
              
              <div className="bg-card border border-primary/30 rounded-xl p-6 shadow-neon">
                <h4 className="font-heading font-bold text-primary mb-3">Your Alteration</h4>
                <p className="text-sm text-primary mb-2">{alterationData.title}</p>
                <p className="text-sm text-muted-foreground">{alterationData.description}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <TimeShiftButton
                variant="hero"
                size="lg"
                onClick={() => navigate('/events')}
                className="flex-1 sm:flex-none"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Alter Another Timeline
              </TimeShiftButton>
              
              <TimeShiftButton
                variant="neon"
                size="lg"
                onClick={() => {
                  // In a real app, this would share the results
                  navigator.clipboard.writeText(`I just created the ${universeName} timeline in TimeShift!`);
                }}
                className="flex-1 sm:flex-none"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share Timeline
              </TimeShiftButton>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground/60 font-body">
              Each alteration creates infinite possibilities. Your choices echo through eternity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;