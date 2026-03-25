export interface NewsItem {
  title: string;
  url?: string;
  summary?: string;
  source?: string;
  time?: string;
  category: string;
}

export interface RepoItem {
  name: string;
  url?: string;
  description?: string;
  language?: string;
  stars?: string | number;
}

export interface DigestData {
  date: string;
  generatedAt: string;
  stats?: {
    news?: number;
    githubGeneral?: number;
    githubAi?: number;
  };
  news?: NewsItem[];
  github?: {
    general?: RepoItem[];
    ai?: RepoItem[];
  };
  source?: {
    news?: { usedDate?: string };
    github?: { usedDate?: string };
  };
}
