export type UserRole = 'model' | 'organizer' | 'visitor';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  bio?: string;
  location?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ModelProfile extends User {
  role: 'model';
  measurements?: {
    height: number;
    weight: number;
    bust: number;
    waist: number;
    hips: number;
  };
  experience?: string[];
  portfolio?: {
    id: string;
    url: string;
    caption?: string;
  }[];
}

export interface OrganizerProfile extends User {
  role: 'organizer';
  companyName: string;
  website?: string;
  pastEvents?: {
    id: string;
    name: string;
    date: Date;
  }[];
}

export interface VisitorProfile extends User {
  role: 'visitor';
  favorites?: {
    models: string[];
    contests: string[];
    organizers: string[];
  };
}