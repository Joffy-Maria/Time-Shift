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
    category: "science",
    videoUrl1: "/videos/moon-landing.mp4" // Add your video URL here
  },
  {
    id: "light-bulb",
    title: "Invention of the Light Bulb",
    year: 1879,
    description: "Thomas Edison perfects the incandescent light bulb, illuminating the world.",
    image: lightBulbImg,
    category: "technology",
    videoUrl1: "/videos/bulb.mp4"
  },
  {
    id: "printing-press",
    title: "Gutenberg's Printing Press",
    year: 1440,
    description: "Johannes Gutenberg invents the printing press, revolutionizing information distribution.",
    image: printingPressImg,
    category: "technology",
    videoUrl1: "/videos/type.mp4"
  },
  {
    id: "newton-apple",
    title: "Newton Discovers Gravity",
    year: 1665,
    description: "Isaac Newton observes an apple falling from a tree, inspiring his formulation of gravity and laying the foundation for classical mechanics.",
    image: newtonAppleImg,
    category: "science",
    videoUrl1: "/videos/newton_died.mp4"
  },
  {
    id: "electricity",
    title: "Discovery of Electricity",
    year: 1752,
    description: "Benjamin Franklin's experiments lead to understanding electricity, powering the modern world.",
    image: electricityImg,
    category: "science",
    videoUrl1: "/videos/mechworlddd.mp4"
  }
];

export const alterations: Record<string, Alteration[]> = {
  "moon-landing": [
    {
      id: "prevent",
      title: "Mission Failure",
      description: "Apollo 11 encounters technical difficulties and never reaches the Moon",
      icon: "🚫",
      chaosLevel: 75,
      videoUrl2: "/videos/moon-landing.mp4" // Add your video URL here
    },
    {
      id: "earlier",
      title: "Earlier Success",
      description: "The Moon landing happens 5 years earlier during the height of the space race",
      icon: "⚡",
      chaosLevel: 45,
      videoUrl2: "/videos/moon-landing.mp4"
    },
    {
      id: "different-nation",
      title: "Soviet Victory",
      description: "The Soviet Union successfully lands on the Moon first",
      icon: "🌍",
      chaosLevel: 85,
      videoUrl2: "/videos/moon-landing.mp4"
    }
  ],
  "light-bulb": [
    {
      id: "prevent",
      title: "Never Invented",
      description: "Edison never perfects the light bulb, leaving the world in darkness",
      icon: "🕯️",
      chaosLevel: 90,
      videoUrl2: "/videos/nolight.mp4"
    },
    {
      id: "different-inventor",
      title: "Tesla's Triumph",
      description: "Nikola Tesla invents the light bulb first, changing the course of electrical history",
      icon: "⚡",
      chaosLevel: 65,
      videoUrl2: "/videos/town.mp4"
    },
    {
      id: "earlier",
      title: "Earlier Innovation",
      description: "The light bulb is invented 50 years earlier, accelerating industrialization",
      icon: "💡",
      chaosLevel: 55,
      videoUrl2: "/videosing/nolight.mp4"
    }
  ],
  "printing-press": [
    {
      id: "prevent",
      title: "Lost to Time",
      description: "Gutenberg's workshop burns down, delaying the printing revolution by centuries",
      icon: "🔥",
      chaosLevel: 95,
      videoUrl2: "/videos/tablets.mp4"
    },
    {
      id: "digital-leap",
      title: "Digital Jump",
      description: "Gutenberg somehow invents digital printing, skipping centuries of development",
      icon: "💻",
      chaosLevel: 99,
      videoUrl2: "/videos/tablets.mp4"
    },
    {
      id: "mass-production",
      title: "Instant Mass Production",
      description: "The printing press is immediately mass-produced, flooding the world with books",
      icon: "📚",
      chaosLevel: 70,
      videoUrl2: "/videos/type.mp4"
    }
  ],
  "newton-apple": [
    {
      id: "dies-before",
      title: "Premature Death",
      description: "Newton dies before the apple incident, never formulating his laws of motion",
      icon: "☠️",
      chaosLevel: 85,
      videoUrl2: "/videos/newton_died.mp4"
    },
    {
      id: "never-happened",
      title: "No Apple Moment",
      description: "The apple incident never occurs, and Newton discovers gravity through other means.",
      icon: "🍏",
      chaosLevel: 30,
      videoUrl2: "/videos/newton_after.mp4"
    },
    {
      id: "ignored-it",
      title: "Dismissed the Apple",
      description: "Newton sees the apple fall but finds it unremarkable, delaying key insights.",
      icon: "🙄",
      chaosLevel: 65,
      videoUrl2: "/videos/newton_ignore.mp4"
    }
  ],
  "electricity": [
    {
      id: "prevent",
      title: "No Discovery",
      description: "Electricity remains a mystery, keeping humanity in the pre-electric age",
      icon: "🌑",
      chaosLevel: 98,
      videoUrl2: "/videos/mechworlddd.mp4"
    },
    {
      id: "ancient-discovery",
      title: "Ancient Knowledge",
      description: "Electricity is discovered in ancient Egypt, advancing civilization by millennia",
      icon: "⚡",
      chaosLevel: 92,
      videoUrl2: "/videos/mechworld.mp4"
    },
    {
      id: "wireless-first",
      title: "Wireless Revolution",
      description: "Wireless electricity is discovered first, eliminating the need for power grids",
      icon: "📡",
      chaosLevel: 85,
      videoUrl2: "/videos/egypt.mp4"
    }
  ]
};
