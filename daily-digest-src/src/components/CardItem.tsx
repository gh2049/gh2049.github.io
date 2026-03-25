import type { NewsItem, RepoItem } from '../types';

export function NewsCard({ item }: { item: NewsItem }) {
  const timeStr = item.time ? item.time.slice(0, 16) : '';
  return (
    <article className="newspaper-card group break-inside-avoid">
      <div className="flex justify-between items-baseline mb-4">
        <span className="industrial-tag bg-primary">{item.category}</span>
        <span className="font-mono text-[10px] text-muted tracking-widest">{timeStr}</span>
      </div>
      <h3 className="m-0 mb-3 text-2xl editorial-heading leading-snug">
        <a href={item.url || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
          {item.title}
        </a>
      </h3>
      <p className="m-0 mb-5 text-[15px] text-text/80 leading-relaxed max-w-lg">
        {item.summary}
      </p>
      <div className="font-mono text-[10px] text-text tracking-widest uppercase pb-2 inline-block border-b-2 border-primary/30">
        SOURCE — {item.source}
      </div>
    </article>
  );
}

export function NewsFeatureCard({ item }: { item: NewsItem }) {
  const timeStr = item.time ? item.time.slice(0, 16) : '';
  return (
    <article className="newspaper-feature group">
      <div className="flex-1 max-w-3xl">
        <div className="flex gap-4 items-center mb-6 flex-wrap">
          <span className="industrial-tag bg-text px-3 py-1.5 text-xs text-bg">FEATURE_STORY</span>
          <span className="font-mono text-[11px] text-primary tracking-widest font-bold">{item.category}</span>
          <span className="font-mono text-[11px] text-muted tracking-widest">— {timeStr}</span>
        </div>
        <h3 className="m-0 mb-4 text-4xl md:text-6xl editorial-heading leading-[1.05] tracking-tighter">
          <a href={item.url || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
            {item.title}
          </a>
        </h3>
        <p className="m-0 mb-8 text-xl text-text/80 leading-relaxed font-serif italic max-w-2xl">
          {item.summary}
        </p>
        <div className="font-mono text-[11px] text-text tracking-[0.15em] uppercase pb-2 inline-block border-b-[3px] border-primary font-bold">
          SYS_SOURCE // {item.source}
        </div>
      </div>
    </article>
  );
}

export function RepoCard({ item }: { item: RepoItem }) {
  return (
    <article className="newspaper-tabular-card group">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-2 gap-4">
           <h3 className="m-0 text-lg editorial-heading leading-tight flex-1">
            <a href={item.url || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-200">
              {item.name}
            </a>
          </h3>
          <span className="flex items-center gap-1 font-mono text-[11px] font-bold">
            <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            {item.stars || '-'}
          </span>
        </div>
        <p className="m-0 mb-3 text-[13px] text-text/70 leading-snug line-clamp-2 md:line-clamp-none">
          {item.description}
        </p>
        <div className="mt-auto pt-2">
          <span className="font-mono text-[9px] uppercase tracking-widest text-text border border-text px-1.5 py-0.5 rounded-sm font-bold bg-bg-soft">
            {item.language || 'SYS_CODE'}
          </span>
        </div>
      </div>
    </article>
  );
}
