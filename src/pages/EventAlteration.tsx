import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { historicalEvents, alterations } from "@/data/historicalEvents";
import { TimeShiftButton } from "@/components/TimeShiftButton";
import { ArrowLeft, Zap, AlertTriangle } from "lucide-react";

const EventAlteration = () => {
  const navigate = useNavigate();
  const { eventId } = useParams<{ eventId: string }>();
  const [selectedAlteration, setSelectedAlteration] = useState<string | null>(null);

  const event = historicalEvents.find(e => e.id === eventId);
  const eventAlterations = eventId ? alterations[eventId] : [];

  if (!event) {
    return <div>Event not found</div>;
  }

  const getChaosColor = (level: number) => {
    if (level < 50) return 'text-green-400';
    if (level < 75) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-dark-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-dark" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <TimeShiftButton
            variant="ghost"
            onClick={() => navigate('/events')}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </TimeShiftButton>
          
          <h1 className="text-title font-heading font-bold text-cosmic">
            Temporal Alteration
          </h1>
          
          <div className="w-20" /> {/* Spacer */}
        </div>

        {/* Selected Event Display */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-card border border-border rounded-xl p-6 shadow-cosmic">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                {event.title}
              </h2>
              <p className="text-primary font-mono">{event.year}</p>
              <p className="text-muted-foreground mt-4">{event.description}</p>
            </div>
          </div>
        </div>

        {/* Alteration Options */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-heading font-bold text-center text-foreground mb-8">
            Choose Your Alteration
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventAlterations.map((alteration, index) => (
              <div
                key={alteration.id}
                className={`group relative bg-card border border-border rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-primary hover:shadow-neon ${
                  selectedAlteration === alteration.id ? 'border-primary shadow-neon scale-105' : ''
                }`}
                onClick={() => setSelectedAlteration(alteration.id)}
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Icon */}
                <div className="text-center mb-4">
                  <div className="text-6xl mb-2">{alteration.icon}</div>
                  <div className="flex items-center justify-center space-x-2">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className={`text-sm font-mono ${getChaosColor(alteration.chaosLevel)}`}>
                      Chaos: {alteration.chaosLevel}%
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h4 className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                    {alteration.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {alteration.description}
                  </p>
                </div>

                {/* Chaos Warning */}
                {alteration.chaosLevel > 75 && (
                  <div className="mt-4 flex items-center space-x-2 text-red-400">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-xs font-mono">High Risk</span>
                  </div>
                )}

                {/* Selection Indicator */}
                {selectedAlteration === alteration.id && (
                  <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center animate-pulse">
                    <Zap className="w-4 h-4 text-primary-foreground" />
                  </div>
                )}

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Execute Button */}
        {selectedAlteration && (
          <div className="flex justify-center mt-12">
            <TimeShiftButton
              variant="plasma"
              size="xl"
              onClick={() => navigate(`/videos/${eventId}/${selectedAlteration}`)}
              className="animate-pulse-slow"
            >
              <Zap className="w-5 h-5 mr-2" />
              Execute Temporal Change
            </TimeShiftButton>
          </div>
        )}

        {/* Warning */}
        <div className="text-center mt-8">
          <p className="text-red-400/60 font-body text-sm flex items-center justify-center">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Warning: Temporal alterations cannot be undone
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventAlteration;