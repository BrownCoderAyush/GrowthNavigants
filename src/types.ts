
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Founder {
  name: string;
  role: string;
  image: string;
  shortBio: string;
  longDescription: string;
  links: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}
