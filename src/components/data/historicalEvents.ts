import { HistoricalEvent, Alteration } from "@/types/events";
import moonLandingImg from "@/assets/moon-landing.jpg";
import lightBulbImg from "@/assets/light-bulb.jpg";
import printingPressImg from "@/assets/printing-press.jpg";

export const historicalEvents: HistoricalEvent[] = [
  {
    id: "moon-landing",
    title: "Moon Landing",
    year: 1969,
    description: "Apollo 11 successfully lands on the Moon, marking humanity's first steps on another celestial body.",
    image: moonLandingImg,
    category: "science"
  },
  {
    id: "light-bulb",
    title: "Invention of the Light Bulb",
    year: 1879,
    description: "Thomas Edison perfects the incandescent light bulb, illuminating the world.",
    image: lightBulbImg,
    category: "technology"
  },
  {
    id: "printing-press",
    title: "Gutenberg's Printing Press",
    year: 1440,
    description: "Johannes Gutenberg invents the printing press, revolutionizing information distribution.",
    image: printingPressImg,
    category: "technology"
  },
  {
    id: "berlin-wall",
    title: "Fall of Berlin Wall",
    year: 1989,
    description: "The Berlin Wall falls, symbolizing the end of the Cold War and German reunification.",
    image: "/api/placeholder/400/300",
    category: "politics"
  },
  {
    id: "electricity",
    title: "Discovery of Electricity",
    year: 1752,
    description: "Benjamin Franklin's experiments lead to understanding electricity, powering the modern world.",
    image: "/api/placeholder/400/300",
    category: "science"
  }
];

export const alterations: Record<string, Alteration[]> = {
  "moon-landing": [
    {
      id: "prevent",
      title: "Mission Failure",
      description: "Apollo 11 encounters technical difficulties and never reaches the Moon",
      icon: "🚫",
      chaosLevel: 75
    },
    {
      id: "earlier",
      title: "Earlier Success",
      description: "The Moon landing happens 5 years earlier during the height of the space race",
      icon: "⚡",
      chaosLevel: 45
    },
    {
      id: "different-nation",
      title: "Soviet Victory",
      description: "The Soviet Union successfully lands on the Moon first",
      icon: "🌍",
      chaosLevel: 85
    }
  ],
  "light-bulb": [
    {
      id: "prevent",
      title: "Never Invented",
      description: "Edison never perfects the light bulb, leaving the world in darkness",
      icon: "🕯️",
      chaosLevel: 90
    },
    {
      id: "different-inventor",
      title: "Tesla's Triumph",
      description: "Nikola Tesla invents the light bulb first, changing the course of electrical history",
      icon: "⚡",
      chaosLevel: 65
    },
    {
      id: "earlier",
      title: "Earlier Innovation",
      description: "The light bulb is invented 50 years earlier, accelerating industrialization",
      icon: "💡",
      chaosLevel: 55
    }
  ],
  "printing-press": [
    {
      id: "prevent",
      title: "Lost to Time",
      description: "Gutenberg's workshop burns down, delaying the printing revolution by centuries",
      icon: "🔥",
      chaosLevel: 95
    },
    {
      id: "digital-leap",
      title: "Digital Jump",
      description: "Gutenberg somehow invents digital printing, skipping centuries of development",
      icon: "💻",
      chaosLevel: 99
    },
    {
      id: "mass-production",
      title: "Instant Mass Production",
      description: "The printing press is immediately mass-produced, flooding the world with books",
      icon: "📚",
      chaosLevel: 70
    }
  ],
  "berlin-wall": [
    {
      id: "never-falls",
      title: "Eternal Division",
      description: "The Berlin Wall never falls, keeping Germany permanently divided",
      icon: "🧱",
      chaosLevel: 80
    },
    {
      id: "earlier-fall",
      title: "Early Liberation",
      description: "The Wall falls 10 years earlier, changing the pace of reunification",
      icon: "🕊️",
      chaosLevel: 60
    },
    {
      id: "violent-fall",
      title: "Revolutionary Uprising",
      description: "The Wall falls through violent revolution rather than peaceful protest",
      icon: "⚔️",
      chaosLevel: 88
    }
  ],
  "electricity": [
    {
      id: "prevent",
      title: "No Discovery",
      description: "Electricity remains a mystery, keeping humanity in the pre-electric age",
      icon: "🌑",
      chaosLevel: 98
    },
    {
      id: "ancient-discovery",
      title: "Ancient Knowledge",
      description: "Electricity is discovered in ancient Egypt, advancing civilization by millennia",
      icon: "⚡",
      chaosLevel: 92
    },
    {
      id: "wireless-first",
      title: "Wireless Revolution",
      description: "Wireless electricity is discovered first, eliminating the need for power grids",
      icon: "📡",
      chaosLevel: 85
    }
  ]
};