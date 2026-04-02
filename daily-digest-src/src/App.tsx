import { useState, useMemo } from 'react';
import { useDigestData } from './hooks/useDigestData';
import { NewsCard, NewsFeatureCard, RepoCard, HackerNewsCard } from './components/CardItem';
import { MustRead } from './components/MustRead';
import React from 'react';

function App() {
  const qs = new URLSearchParams(window.location.search);
  const { data, loading, error, currentDate, setCurrentDate, archiveDates } = useDigestData(qs.get('date'));
  const [search, setSearch] = useState('');

  const filterText = search.trim().toLowerCase();

  const filterNews = useMemo(() => {
    if (!data?.news) return [];
    if (!filterText) return data.news;
    return data.news.filter(n => `${n.title} ${n.summary} ${n.category}`.toLowerCase().includes(filterText));
  }, [data?.news, filterText]);

  const filterGen = useMemo(() => {
    if (!data?.github?.general) return [];
    if (!filterText) return data.github.general;
    return data.github.general.filter(n => `${n.name} ${n.description} ${n.language}`.toLowerCase().includes(filterText));
  }, [data?.github?.general, filterText]);

  const filterAi = useMemo(() => {
    if (!data?.github?.ai) return [];
    if (!filterText) return data.github.ai;
    return data.github.ai.filter(n => `${n.name} ${n.description} ${n.language}`.toLowerCase().includes(filterText));
  }, [data?.github?.ai, filterText]);

  const filterHackerNews = useMemo(() => {
    if (!data?.hackernews) return [];
    if (!filterText) return data.hackernews;
    return data.hackernews.filter(n => `${n.title} ${n.by}`.toLowerCase().includes(filterText));
  }, [data?.hackernews, filterText]);

  const archiveByMonth = useMemo(() => {
    const groups: Record<string, string[]> = {};
    archiveDates.slice(0, 60).forEach(d => {
      const month = d.slice(0, 7);
      if (!groups[month]) groups[month] = [];
      groups[month].push(d);
    });
    return Object.entries(groups).sort((a, b) => b[0].localeCompare(a[0]));
  }, [archiveDates]);

  const featureNews = filterNews.length > 0 ? filterNews[0] : null;
  const standardNews = filterNews.length > 1 ? filterNews.slice(1) : [];

  return (
    <main className="relative z-10 max-w-[1300px] mx-auto p-[32px_16px_80px]">
      <header className="mb-14 border-b-[4px] border-text pb-6 animate-fade-in-up opacity-0">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <div className="flex flex-col">
            <div className="font-mono text-text font-bold text-[12px] tracking-[0.2em] uppercase mb-6 flex gap-3 items-center">
              <span>Vol. {data?.date?.replace(/-/g, '') || '0000'}</span>
              <span className="w-12 h-[2px] bg-primary"></span>
              <span>Openclaw</span>
            </div>
            <h1 className="m-0 text-[3.5rem] md:text-8xl editorial-heading tracking-tighter uppercase leading-none">
              THE DAILY DIGEST
            </h1>
            <span className="font-mono text-[9px] text-muted uppercase tracking-widest mt-4">
              Printed: <strong className="text-text">{data ? new Date(data.generatedAt).toLocaleString('en-US', {hour12: false}) : '--'}</strong>
            </span>
          </div>
          <div className="flex gap-6 md:border-l-2 md:border-text pl-0 md:pl-5 items-end">
            <div className="flex flex-col items-center">
              <span className="font-serif text-5xl font-bold leading-none text-text">{data?.stats?.news || 0}</span>
              <span className="font-mono text-[8px] text-muted tracking-widest uppercase mt-1.5">articles</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-5xl font-bold leading-none text-text">{data?.stats?.hackerNews || 0}</span>
              <span className="font-mono text-[8px] text-muted tracking-widest uppercase mt-1.5">HN picks</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-serif text-5xl font-bold leading-none text-text">{data?.stats?.githubGeneral || 0}</span>
              <span className="font-mono text-[8px] text-muted tracking-widest uppercase mt-1.5">repos</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-between items-end border-t-2 border-text pt-4">
          <div className="flex gap-6 items-end flex-wrap w-full md:w-auto">
            <div className="flex flex-col text-left">
              <label htmlFor="dateInput" className="font-mono text-[10px] text-muted tracking-widest uppercase mb-1">Archive Date</label>
              <input
                id="dateInput"
                type="date"
                className="editorial-input w-[140px]"
                value={currentDate || ''}
                onChange={e => setCurrentDate(e.target.value)}
              />
            </div>
            <button className="editorial-button" onClick={() => setCurrentDate(null)}>
              LATEST EDITION
            </button>
            <div className="flex flex-col text-left ml-0 md:ml-4 w-full md:w-auto mt-4 md:mt-0">
              <label htmlFor="searchInput" className="font-mono text-[10px] text-muted tracking-widest uppercase mb-1">DATA_QUERY</label>
              <input
                id="searchInput"
                type="search"
                placeholder="Keywords..."
                className="editorial-input w-full md:w-[250px]"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            {loading ? (
              <span className="font-mono text-[10px] text-primary font-bold tracking-widest uppercase ml-2 mb-1 flex items-center gap-1.5">
                SYS&nbsp;<span className="loading-dot"></span><span className="loading-dot"></span><span className="loading-dot"></span>
              </span>
            ) : error ? (
              <span className="font-mono text-[10px] text-danger font-bold tracking-widest uppercase ml-2 mb-1">FAULT</span>
            ) : (
              <span className="font-mono text-[10px] text-primary font-bold tracking-widest uppercase ml-2 mb-1">STANDBY</span>
            )}
          </div>
        </div>
      </header>

      <div className="animate-fade-in-up stagger-1 opacity-0 mb-16">
        <MustRead data={data} />
      </div>

      <Section
        title="GLOBAL INTELLIGENCE"
        icon="▸"
        subtitle={`SYS_DATE // ${data?.source?.dailySources?.usedDate || data?.date || '--'}`}
        delayClass="stagger-2"
        count={filterNews.length}
        total={data?.news?.length}
      >
        {filterNews.length === 0 ? <p className="text-muted font-mono italic py-8 border-t-[3px] border-text border-dashed">NO DATA FEED.</p> :
          <div>
            {featureNews && <NewsFeatureCard item={featureNews} />}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {standardNews.map((n, i) => (
                <div key={i} className="break-inside-avoid">
                  <NewsCard item={n} />
                </div>
              ))}
            </div>
          </div>
        }
      </Section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20 animate-fade-in-up stagger-3 opacity-0 pb-16 border-b-[4px] border-text">
        <div>
          <h2 className="editorial-heading text-3xl m-0 uppercase border-b-[3px] border-text pb-2 mb-4 flex justify-between items-baseline">
            <span className="flex items-center gap-2">
              <span className="font-mono text-xl text-text">▣</span>
              Trending Repos
              {filterText && <span className="font-mono text-sm font-normal text-muted ml-1">({filterGen.length}/{data?.github?.general?.length || 0})</span>}
            </span>
            <span className="font-mono text-[10px] font-normal tracking-widest text-muted">{data?.source?.dailySources?.usedDate || data?.date || '--'}</span>
          </h2>
          {filterGen.length === 0 ? <p className="font-mono text-xs text-muted">AWAITING DATA.</p> :
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {filterGen.map((r, i) => <RepoCard key={i} item={r} />)}
            </div>
          }
        </div>
        <div>
          <h2 className="editorial-heading text-3xl m-0 uppercase border-b-[3px] border-primary pb-2 mb-4 flex justify-between items-baseline">
            <span className="flex items-center gap-2">
              <span className="font-mono text-xl text-primary">◈</span>
              AI Chronicles
              {filterText && <span className="font-mono text-sm font-normal text-muted ml-1">({filterAi.length}/{data?.github?.ai?.length || 0})</span>}
            </span>
            <span className="font-mono text-[10px] font-normal tracking-widest text-muted">{data?.source?.dailySources?.usedDate || data?.date || '--'}</span>
          </h2>
          {filterAi.length === 0 ? <p className="font-mono text-xs text-muted">AWAITING DATA.</p> :
            <div className="flex flex-col border-t border-line">
              {filterAi.map((r, i) => <div key={i} className="w-full border-b border-line border-dashed last:border-solid last:border-line"><RepoCard item={r} /></div>)}
            </div>
          }
        </div>
        <div>
          <h2 className="editorial-heading text-3xl m-0 uppercase border-b-[3px] border-primary-2 pb-2 mb-4 flex justify-between items-end">
            <span className="flex items-center gap-2">
              <span className="font-mono text-xl text-primary-2">◉</span>
              Hacker News
              {filterText && <span className="font-mono text-sm font-normal text-muted ml-1">({filterHackerNews.length}/{data?.hackernews?.length || 0})</span>}
            </span>
            <span className="font-mono text-[10px] font-normal tracking-widest text-muted">{data?.source?.dailySources?.usedDate || data?.date || '--'}</span>
          </h2>
          {filterHackerNews.length === 0 ? <p className="font-mono text-xs text-muted">AWAITING DATA.</p> :
            <div className="flex flex-col border-t border-line">
              {filterHackerNews.map((hn, i) => (
                <div key={i} className="w-full border-b border-line border-dashed last:border-solid last:border-line">
                  <HackerNewsCard item={hn} />
                </div>
              ))}
            </div>
          }
        </div>
      </div>

      <footer className="mt-16 animate-fade-in-up stagger-4 opacity-0 max-w-5xl mx-auto">
        <h2 className="editorial-heading text-2xl mb-8 uppercase tracking-widest font-bold text-center">Index // Archives</h2>
        {archiveByMonth.length === 0 ? (
          <span className="text-muted font-mono text-xs block text-center">NO ARCHIVES FOUND.</span>
        ) : (
          <div className="space-y-6">
            {archiveByMonth.map(([month, dates]) => (
              <div key={month}>
                <div className="font-mono text-[10px] text-muted tracking-widest uppercase mb-3 flex items-center gap-3">
                  <span className="font-bold text-text">{month}</span>
                  <span className="flex-1 h-px bg-line"></span>
                  <span>{dates.length} editions</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {dates.map(d => (
                    <button
                      key={d}
                      onClick={() => setCurrentDate(d)}
                      className={`font-mono text-[11px] px-2.5 py-1 font-bold transition-all border ${
                        d === currentDate
                          ? 'bg-primary text-bg border-primary'
                          : 'bg-transparent text-text border-text/40 hover:bg-text hover:text-bg hover:border-text'
                      }`}
                    >
                      {d.slice(8)}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </footer>
    </main>
  );
}

function Section({ title, subtitle, children, delayClass, icon, count, total }: {
  title: string, subtitle: string, children: React.ReactNode, delayClass: string,
  icon?: string, count?: number, total?: number
}) {
  const showBadge = total !== undefined && count !== undefined && count !== total && total > 0;
  return (
    <section className={`mb-16 mt-12 animate-fade-in-up opacity-0 ${delayClass}`}>
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 border-b-[4px] border-text pb-2">
        <h2 className="editorial-heading text-4xl m-0 uppercase tracking-tight flex items-center gap-3">
          {icon && <span className="text-primary font-mono text-2xl">{icon}</span>}
          {title}
          {showBadge && (
            <span className="font-mono text-base font-normal text-muted">({count}/{total})</span>
          )}
        </h2>
        <div className="font-mono text-[11px] text-bg font-bold tracking-[0.15em] uppercase mt-4 md:mt-0 bg-text px-3 py-1.5">
          {subtitle}
        </div>
      </div>
      {children}
    </section>
  );
}

export default App;
