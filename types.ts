export interface Metric {
  value: string;
  label: string;
  description: string;
}

export interface ExpertiseArea {
  title: string;
  description: string;
  skills: string[];
}

export interface CareerHighlight {
  title: string;
  period?: string; // Optional, as we might hide specific dates to focus on impact
  description: string;
  achievements: string[];
  iconName: 'TrendingUp' | 'Globe' | 'Users' | 'Zap' | 'BarChart' | 'Target';
}

export interface Insight {
  title: string;
  category: string;
  summary: string;
  link: string;
  date: string;
}

export enum SectionId {
  Home = 'home',
  Expertise = 'expertise',
  Impact = 'impact',
  Philosophy = 'philosophy',
  Insights = 'insights',
  Contact = 'contact'
}