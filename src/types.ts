export interface StatItem {
  icon: string;
  value: string;
  label: string;
  sublabel?: string;
}

export interface OutcomeItem {
  id: string;
  iconName: 'heart' | 'book' | 'cap' | 'handHeart';
  title: string;
  description: string;
  color: string;
  image?: string;
  subtitle?: string;
}

export interface PillarItem {
  grade: string;
  gradeBadge: string;
  title: string;
  image: string;
  bullets: string[];
}

export interface ProgramItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  summary: string;
  readTime: string;
  author: string;
  featured?: boolean;
  fullContent?: string[];
}
