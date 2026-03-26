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

export interface HackerNewsItem {
  rank: number;
  title: string;
  description?: string;
  url?: string;
  score: number;
  by?: string;
  time?: string;
  descendants?: number;
  hnLink?: string;
}

export interface DigestData {
  date: string;
  generatedAt: string;
  stats?: {
    news?: number;
    hackerNews?: number;
    githubGeneral?: number;
    githubAi?: number;
  };
  news?: NewsItem[];
  hackernews?: HackerNewsItem[];
  github?: {
    general?: RepoItem[];
    ai?: RepoItem[];
  };
  source?: {
    dailySources?: { usedDate?: string; fallback?: boolean };
  };
}
