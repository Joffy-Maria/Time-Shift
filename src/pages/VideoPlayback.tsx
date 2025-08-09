import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { historicalEvents, alterations } from "@/data/historicalEvents";
import { TimeShiftButton } from "@/components/TimeShiftButton";
import { Play, Pause, SkipForward, Loader2 } from "lucide-react";

const VideoPlayback = () => {
  const navigate = useNavigate();
  const { eventId, alteration } = useParams<{ eventId: string; alteration: string }>();
  const [currentVideo, setCurrentVideo] = useState<1 | 2>(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const event = historicalEvents.find(e => e.id === eventId);
  const alterationData = eventId && alteration
    ? alterations[eventId]?.find(a => a.id === alteration)
    : null;

  // Ref for video element to control playback manually if needed
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Reset progress and loading when switching video
    setProgress(0);
    setIsLoading(true);
    setIsPlaying(false);
  }, [currentVideo]);

  if (!event || !alterationData) {
    return <div>Error: Event or alteration not found</div>;
  }

  const videoTitles = {
    1: `The Altered ${event.title}`,
    2: `Future World: ${alterationData.title}`,
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-dark-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-dark" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-title font-heading font-bold text-cosmic mb-2">
            Temporal Projection
          </h1>
          <p className="text-muted-foreground">
            Witnessing alternate timeline: {event.title} → {alterationData.title}
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-primary/30 rounded-xl overflow-hidden shadow-cosmic">
            {/* Video Area */}
            <div className="aspect-video bg-black relative flex items-center justify-center">
              {isLoading && (
                <div className="text-center text-foreground">
                  <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-primary" />
                  <p className="text-lg font-heading">Generating Timeline...</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Quantum processors calculating alternate reality
                  </p>
                </div>
              )}

              <video
                key={currentVideo} // reload video on change
                ref={videoRef}
                src={currentVideo === 1 ? event.videoUrl1 : alterationData.videoUrl2}
                className={`w-full h-full object-cover ${isLoading ? "hidden" : "block"}`}
                controls={true}
                autoPlay={isPlaying}
                muted
                onLoadedData={() => setIsLoading(false)}
                onEnded={() => {
                  if (currentVideo === 1) {
                    setCurrentVideo(2);
                  } else {
                    setIsPlaying(false);
                    setTimeout(() => {
                      navigate(`/results/${eventId}/${alteration}`);
                    }, 1000);
                  }
                }}
                onTimeUpdate={(e) => {
                  const video = e.currentTarget;
                  if (video.duration > 0) {
                    const percent = (video.currentTime / video.duration) * 100;
                    setProgress(percent);
                  }
                }}
              />
              
              {/* Progress Overlay */}
              {!isLoading && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/50">
                  <div
                    className="h-full bg-primary transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="p-6 bg-card border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <TimeShiftButton
                    variant="neon"
                    size="sm"
                    onClick={() => {
                      if (!isLoading) setIsPlaying(!isPlaying);
                    }}
                    disabled={isLoading}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </TimeShiftButton>

                  <span className="text-sm text-muted-foreground font-mono">
                    Video {currentVideo} of 2
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-sm text-muted-foreground">
                    {Math.round(progress)}% Complete
                  </span>

                  <TimeShiftButton
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate(`/results/${eventId}/${alteration}`)}
                  >
                    <SkipForward className="w-4 h-4 mr-2" />
                    Skip to Results
                  </TimeShiftButton>
                </div>
              </div>
            </div>
          </div>

          {/* Video Info */}
          <div className="mt-6 text-center">
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div
                className={`p-3 rounded-lg border ${
                  currentVideo === 1 ? "border-primary bg-primary/10" : "border-border bg-card"
                }`}
              >
                <p className="text-sm font-heading font-bold">Historical Change</p>
                <p className="text-xs text-muted-foreground mt-1">Timeline alteration</p>
              </div>
              <div
                className={`p-3 rounded-lg border ${
                  currentVideo === 2 ? "border-primary bg-primary/10" : "border-border bg-card"
                }`}
              >
                <p className="text-sm font-heading font-bold">Future Result</p>
                <p className="text-xs text-muted-foreground mt-1">Consequence projection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayback;
