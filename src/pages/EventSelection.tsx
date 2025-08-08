import { useState } from "react";
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