import { HistoricalEvent, Alteration } from "@/types/events";
import moonLandingImg from "@/assets/moon-landing.jpg";
import lightBulbImg from "@/assets/light-bulb.jpg";
import printingPressImg from "@/assets/printing-press.jpg";
import newtonAppleImg from "@/assets/newtonapple.jpg";
import electricityImg from "@/assets/electricityimg.jpg";
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
  "id": "newton-apple",
  "title": "Newton Dies Before Apple Falls",
  "year": 1665,
  "description": "Isaac Newton dies prematurely, preventing his formulation of classical mechanics. The development of physics is delayed for generations.",
  "image": newtonAppleImg,
  "category": "science"
  },
  {
    id: "electricity",
    title: "Discovery of Electricity",
    year: 1752,
    description: "Benjamin Franklin's experiments lead to understanding electricity, powering the modern world.",
    image: electricityImg,
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
    "newton-apple": [
    {
    "id": "dies-before",
    "title": "Premature Death",
    "description": "Isaac Newton dies before his discoveries, delaying physics for generations.",
    "icon": "☠️",
    "chaosLevel": 85
    },
    {
    "id": "never-happened",
    "title": "No Apple Moment",
    "description": "The apple incident never occurs, and Newton discovers gravity through other means.",
    "icon": "🍏",
    "chaosLevel": 30
    },
    {
    "id": "ignored-it",
    "title": "Dismissed the Apple",
    "description": "Newton sees the apple fall but finds it unremarkable, delaying key insights.",
    "icon": "🙄",
    "chaosLevel": 65
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