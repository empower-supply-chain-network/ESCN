// Base type for Redux state slices
export interface LoadingState {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

// Data Models
export interface Founder {
  id: string;
  name: string;
  title: string;
  story: string[];
  imageUrl: string;
  subtitle: string;
}

export interface Job {
  id: string;
  title:string;
  company: string;
  location: string;
  summary: string;
  type: 'Full-time' | 'Contract' | 'Part-time';
  postedDate: string;
}

export interface SuccessStory {
  id: string;
  initials: string;
  name: string;
  title: string;
  story: string;
  keyImpact: string[];
}

export interface Program {
    id: 'continuous-education' | 'certifications' | 'mentorship';
    title: string;
    subtitle: string;
    description: string;
}

// NEW: Interface for a single member benefit
export interface MemberBenefit {
  id: string;
  title: string;
  description: string;
  icon: string; // Emoji for visual flair
}

// NEW: Interface for a sponsorship package
export interface SponsorshipTier {
  id: string;
  category: 'Educational Institution' | 'Internship Partner' | 'Certification Sponsor';
  tier: string; // e.g., "Basic Tier", "Advanced"
  title: string;
  investment?: string; // Optional for some types
  benefits: string[];
}


// UI Types
export type ModalType = 'login' | 'membership' | 'event' | 'booking' | 'enroll' | null;

export interface UiState extends LoadingState {
  isModalOpen: boolean;
  modalType: ModalType;
}

// Auth Types
export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
}

export interface AuthState extends LoadingState {
  user: User | null;
  isAuthenticated: boolean;
}