import type { DigestData } from '../types';

export function MustRead({ data }: { data: DigestData | null }) {
  const picks = [];
  if (data?.github?.general?.length) picks.push({ type: 'repo', title: data.github.general[0].name, url: data.github.general[0].url });
  if (data?.news?.length) picks.push({ type: 'news', title: data.news[0].title, url: data.news[0].url });
  if (data?.github?.ai?.length) picks.push({ type: 'ai', title: data.github.ai[0].name, url: data.github.ai[0].url });

  return (
    <section className="border-[4px] border-text bg-text w-full p-[3px]">
      <div className="border border-dashed border-bg/20 p-4 md:p-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center text-left">
          <div className="lg:w-1/4 shrink-0">
            <span className="industrial-tag bg-bg text-text text-[11px] mb-4 inline-block font-bold px-3 py-1">MUST READ</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold m-0 leading-none text-bg">EDITOR'S <br/> PICKS</h2>
          </div>

          {picks.length === 0 ? (
            <p className="m-0 text-bg/60 font-mono italic text-sm">AWAITING HOT FIX...</p>
          ) : (
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-bg/20">
              {picks.map((p, i) => {
                const num = (i + 1).toString().padStart(2, '0');
                const typeLabel = p.type === 'repo' ? 'OSS' : p.type === 'ai' ? 'AI' : 'NEWS';
                return (
                  <a key={i} href={p.url || '#'} target="_blank" rel="noopener noreferrer"
                     className="pt-5 md:pt-0 md:pl-10 group first:pt-0 first:pl-0 block hover:-translate-y-1 transition-transform relative">
                    {i > 0 && (
                      <span className="absolute hidden md:block -left-[9px] top-1/2 -translate-y-1/2 text-bg/40 font-mono text-xs leading-none">▶</span>
                    )}
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-serif text-3xl text-bg/30 font-bold group-hover:text-bg/80 transition-colors leading-none">{num}</span>
                      <span className="font-mono text-[10px] font-bold tracking-widest text-primary border border-primary px-1.5 py-0.5">{typeLabel}</span>
                    </div>
                    <span className="font-serif text-xl leading-tight text-bg block group-hover:text-primary transition-colors">{p.title}</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
