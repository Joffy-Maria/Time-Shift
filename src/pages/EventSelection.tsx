import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { historicalEvents } from "@/data/historicalEvents";
import { TimeShiftButton } from "@/components/TimeShiftButton";
import { ArrowLeft, Calendar, ChevronRight } from "lucide-react";

const EventSelection = () => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background bg-dark-grid relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      
      {/* Header */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <TimeShiftButton
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Hub
          </TimeShiftButton>
          
          <h1 className="text-title font-heading font-bold text-cosmic">
            Select Historical Event
          </h1>
          
          <div className="w-20" /> {/* Spacer */}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {historicalEvents.map((event, index) => (
            <div
              key={event.id}
              className={`group relative bg-card border border-border rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-primary hover:shadow-neon ${
                selectedEvent === event.id ? 'border-primary shadow-neon scale-105' : ''
              }`}
              onClick={() => setSelectedEvent(event.id)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Event Image */}
              <div className="w-full h-32 bg-muted rounded-lg mb-4 overflow-hidden relative">
                {event.image.startsWith('/api/placeholder') ? (
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    {event.category === 'science' && '🚀'}
                    {event.category === 'technology' && '⚡'}
                    {event.category === 'politics' && '🏛️'}
                    {event.category === 'culture' && '🎭'}
                  </div>
                ) : (
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Event Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <span className="text-sm text-primary font-mono bg-primary/10 px-2 py-1 rounded">
                    <Calendar className="w-3 h-3 inline mr-1" />
                    {event.year}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {event.description}
                </p>

                {/* Selection Indicator */}
                {selectedEvent === event.id && (
                  <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center animate-pulse">
                    <ChevronRight className="w-4 h-4 text-primary-foreground" />
                  </div>
                )}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Continue Button */}
        {selectedEvent && (
          <div className="flex justify-center mt-12">
            <TimeShiftButton
              variant="hero"
              size="xl"
              onClick={() => navigate(`/alter/${selectedEvent}`)}
              className="animate-pulse-slow"
            >
              Initiate Time Alteration
              <ChevronRight className="w-5 h-5 ml-2" />
            </TimeShiftButton>
          </div>
        )}

        {/* Instructions */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground/60 font-body">
            Choose an event to alter the timeline. Each choice will create a unique alternate reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventSelection;