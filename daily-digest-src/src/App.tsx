import { useState, useMemo } from 'react';
import { useDigestData } from './hooks/useDigestData';
import { NewsCard, NewsFeatureCard, RepoCard } from './components/CardItem';
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
          </div>
          <div className="text-left md:text-right flex flex-col font-mono text-[10px] text-text uppercase tracking-widest md:border-l-2 md:border-text pl-0 md:pl-4">
            <span className="mb-2 border-b border-text/20 pb-2">Printed: <br/><strong>{data ? new Date(data.generatedAt).toLocaleString('en-US', {hour12: false}) : '--'}</strong></span>
            <span className="mb-2">Articles_ <br/><strong className="text-sm">{data?.stats?.news || 0}</strong></span>
            <span>Repos_ <br/><strong className="text-sm">{data?.stats?.githubGeneral || 0}</strong></span>
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
            <span className="font-mono text-[10px] text-primary font-bold tracking-widest uppercase ml-2 mb-1">
              {loading ? 'RUNNING...' : error ? <span className="text-danger">FAULT</span> : 'STANDBY'}
            </span>
          </div>
        </div>
      </header>

      <div className="animate-fade-in-up stagger-1 opacity-0 mb-16">
        <MustRead data={data} />
      </div>

      {/* Sections */}
      <Section title="GLOBAL INTELLIGENCE" subtitle={`SYS_DATE // ${data?.source?.news?.usedDate || data?.date || '--'}`} delayClass="stagger-2">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 animate-fade-in-up stagger-3 opacity-0 pb-16 border-b-[4px] border-text">
        <div>
          <h2 className="editorial-heading text-3xl m-0 uppercase border-b-[3px] border-text pb-2 mb-4 flex justify-between items-baseline">
            <span>Trending Repos</span>
            <span className="font-mono text-[10px] font-normal tracking-widest text-muted">{data?.source?.github?.usedDate || data?.date || '--'}</span>
          </h2>
          {filterGen.length === 0 ? <p className="font-mono text-xs text-muted">AWAITING DATA.</p> : 
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {filterGen.map((r, i) => <RepoCard key={i} item={r} />)}
            </div>
          }
        </div>
        <div>
           <h2 className="editorial-heading text-3xl m-0 uppercase border-b-[3px] border-text pb-2 mb-4 flex justify-between items-baseline">
            <span>AI Chronicles</span>
            <span className="font-mono text-[10px] font-normal tracking-widest text-muted">{data?.source?.github?.usedDate || data?.date || '--'}</span>
          </h2>
          {filterAi.length === 0 ? <p className="font-mono text-xs text-muted">AWAITING DATA.</p> : 
            <div className="flex flex-col border-t border-line">
              {filterAi.map((r, i) => <div key={i} className="w-full border-b border-line border-dashed last:border-solid last:border-line"><RepoCard item={r} /></div>)}
            </div>
          }
        </div>
      </div>

      <footer className="mt-16 text-center animate-fade-in-up stagger-4 opacity-0 max-w-5xl mx-auto">
        <h2 className="editorial-heading text-2xl mb-8 uppercase tracking-widest font-bold">Index // Archives</h2>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-3">
          {archiveDates.length === 0 ? <span className="text-muted font-mono text-xs">NO ARCHIVES FOUND.</span> : 
            archiveDates.slice(0, 40).map(d => (
              <button 
                key={d} 
                onClick={() => setCurrentDate(d)}
                className="font-mono text-[12px] px-3 py-1.5 bg-text text-bg hover:bg-primary font-bold transition-colors uppercase border border-transparent hover:border-text"
              >
                {d}
              </button>
            ))
          }
        </div>
      </footer>
    </main>
  );
}

function Section({ title, subtitle, children, delayClass }: { title: string, subtitle: string, children: React.ReactNode, delayClass: string }) {
  return (
    <section className={`mb-16 mt-12 ${delayClass}`}>
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 border-b-[4px] border-text pb-2">
        <h2 className="editorial-heading text-4xl m-0 uppercase tracking-tight">{title}</h2>
        <div className="font-mono text-[11px] text-bg font-bold tracking-[0.15em] uppercase mt-4 md:mt-0 bg-text px-3 py-1.5">
          {subtitle}
        </div>
      </div>
      {children}
    </section>
  );
}

export default App;
