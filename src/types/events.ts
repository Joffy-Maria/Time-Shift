export interface HistoricalEvent {
  id: string;
  title: string;
  year: number;
  description: string;
  image: string;
  category: 'science' | 'politics' | 'culture' | 'technology';

  videoUrl1: string;   // <-- Add this
}

export interface Alteration {
  id: string;
  title: string;
  description: string;
  icon: string;
  chaosLevel: number; // 1-100

  videoUrl2: string;   // <-- Add this
}

export interface AlternateUniverse {
  name: string;
  chaosScore: number;
  summary: string;
  timeline: string[];
}
