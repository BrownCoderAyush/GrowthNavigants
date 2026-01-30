

import { 
  Cloud, 
  Cpu, 
  ShoppingCart, 
  Zap, 
  Search,
  Users
} from 'lucide-react';
import type { ServiceCardProps, Testimonial, FAQItem, NavLink, Founder } from './types.ts';

export const NAV_LINKS: NavLink[] = [
  { label: 'The Problem', href: '#problem' },
  { label: 'Founders', href: '#founders' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Our Process', href: '#process' },
  { label: 'Our Team', href: '#inside' },
  { label: 'Testimonials', href: '#trust' },
  { label: 'FAQ', href: '#faq' },
];

export const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    caption: "Collaborative Engineering Sprints",
    description: "Our cross-functional teams bridging the gap between design and scalable code."
  },
  {
    url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200",
    caption: "Strategic Architecture Planning",
    description: "Defining robust foundations for our enterprise fintech partners."
  },
  {
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
    caption: "Product Research & UX Lab",
    description: "Validating user behaviors before writing a single line of production code."
  },
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
    caption: "Live System Deployments",
    description: "Monitoring real-time performance metrics during a major retail platform launch."
  }
];

export const FOUNDERS: Founder[] = [
  {
    name: "Alex Rivera",
    role: "Founder & Principal Strategist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    shortBio: "Architecting scale for high-growth startups.",
    longDescription: "With over 15 years in enterprise architecture, Alex has led digital transformations for Fortune 500 retail chains and seed-stage fintech disruptors. He believes that tech should be a growth lever, not a bottleneck.",
    links: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: "https://growthnavigants.com"
    }
  },
  {
    name: "Sarah Chen",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    shortBio: "Specialist in high-concurrency cloud systems.",
    longDescription: "Sarah oversees our SDLC methodology, ensuring that every line of code written at GrowthNavigants is optimized for performance and maintainability. Previously, she scaled infrastructure at AWS and Stripe.",
    links: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Michael Vane",
    role: "UX & Research Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    shortBio: "Bridging human behavior and product logic.",
    longDescription: "Michael leads our UX Lab, where we validate product assumptions through rigorous user research. His background in cognitive psychology allows us to build systems that aren't just powerful, but intuitive.",
    links: {
      linkedin: "https://linkedin.com",
      website: "https://michaelvane.design"
    }
  }
];

export const SERVICES: ServiceCardProps[] = [
  {
    title: 'CRM & Sales Systems',
    description: 'We build CRM environments that teams actually use, ensuring data integrity and actionable sales pipelines.',
    icon: <Users className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Scalable architecture that grows with your traffic, moving you from patchwork fixes to robust foundations.',
    icon: <Cloud className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: 'Retail & Fintech',
    description: 'Custom platforms for modern commerce and secure financial transactions built for performance.',
    icon: <ShoppingCart className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: 'Gen AI & IoT',
    description: 'Practical implementation of cutting-edge tech to automate workflows and gather real-time data.',
    icon: <Cpu className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: 'Product Research',
    description: 'Clarity before investment. We validate ideas through deep industry research and prototypes.',
    icon: <Search className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: 'SDLC Guidance',
    description: 'From prototype to full production, we guide your development lifecycle for maximum adoption.',
    icon: <Zap className="w-8 h-8 text-indigo-600" />,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "GrowthNavigants didn’t just build our product — they helped us understand what to build and why.",
    author: "Sarah Jenkins",
    role: "CEO",
    company: "Lumina Fintech"
  },
  {
    quote: "They felt like an extension of our internal team, not a vendor. Our systems finally scale without constant rework.",
    author: "David Chen",
    role: "Product Director",
    company: "SwiftRetail"
  },
  {
    quote: "The clarity they brought to our messy CRM implementation saved us months of frustration and lost leads.",
    author: "Marcus Thorne",
    role: "Founder",
    company: "Nexus Dynamics"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you work with startups and enterprises?",
    answer: "Yes. We support solo founders, fast-growing startups, retail businesses, and enterprise tech teams globally with tailored strategies for each stage of growth."
  },
  {
    question: "What makes you different from other development firms?",
    answer: "We lead with product research and industry understanding — not just code. You get clarity, scalability, and real adoption instead of just a finished repo."
  },
  {
    question: "How do pilots and results-based billing work?",
    answer: "We start small to validate outcomes. You only scale engagement once value is proven, de-risking your investment from day one."
  },
  {
    question: "Which industries do you specialize in?",
    answer: "We have deep expertise in CRM, Cloud Infrastructure, Sales Automation, Fintech, Retail, Generative AI, and IoT."
  }
];
