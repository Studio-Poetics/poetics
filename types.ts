
export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  imageUrl: string;
  targetPage?: Page; // Added to allow projects to link to specific internal pages
}

export enum ViewMode {
  GRID = 'GRID',
  LIST = 'LIST',
  ESSAY = 'ESSAY'
}

export interface PoeticResponse {
  text: string;
  meta: string;
}

export enum Page {
  HOME = 'HOME',
  CONSULTANCY = 'CONSULTANCY',
  GLASSCAPE = 'GLASSCAPE',
  GLASSCAPE_HORIZON = 'GLASSCAPE_HORIZON',
  GAMES = 'GAMES',
  MONSOON_STORIES = 'MONSOON_STORIES',
  EXPERIMENTS = 'EXPERIMENTS',
  JOURNAL = 'JOURNAL',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
  CASE_STUDY_IBW = 'CASE_STUDY_IBW',
  CASE_STUDY_RECLAIM = 'CASE_STUDY_RECLAIM',
  CASE_STUDY_SPACE = 'CASE_STUDY_SPACE',
  CASE_STUDY_WORDSPRINT = 'CASE_STUDY_WORDSPRINT',
  CASE_STUDY_MICRO_GOLD = 'CASE_STUDY_MICRO_GOLD'
}

export interface Award {
  id: string;
  title: string;
  year: string;
  organization: string;
}

export interface TeamMember {
  name: string;
  role: string;
  awards?: Award[];
  linkedinUrl?: string;
  bio?: string;
  education?: string;
}
