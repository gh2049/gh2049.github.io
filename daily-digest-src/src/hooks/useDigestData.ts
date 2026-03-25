import { useState, useEffect } from 'react';
import type { DigestData } from '../types';

export function useDigestData(initialDate: string | null) {
  const [data, setData] = useState<DigestData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [archiveDates, setArchiveDates] = useState<string[]>([]);
  const [currentDate, setCurrentDate] = useState<string | null>(initialDate);

  // Fetch Archive Index
  useEffect(() => {
    fetch('./data/index.json', { cache: 'no-store' })
      .then(r => r.json())
      .then(d => {
        if (d && Array.isArray(d.dates)) {
          setArchiveDates(d.dates);
        }
      })
      .catch(e => console.error('Failed to load archive index', e));
  }, []);

  // Fetch Digest Payload
  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);
    setData(null);

    const url = currentDate ? `./data/${currentDate}.json` : './data/latest.json';

    fetch(url, { cache: 'no-store' })
      .then(r => {
        if (!r.ok) throw new Error(`Fetch ${url} returned ${r.status}`);
        return r.json();
      })
      .then((d: DigestData) => {
        if (active) {
          setData(d);
          if (!currentDate) {
            window.history.replaceState(null, '', window.location.pathname);
          } else {
            window.history.replaceState(null, '', `?date=${encodeURIComponent(currentDate)}`);
          }
        }
      })
      .catch((e: Error) => {
        if (active) setError(e.message || 'Failed to load data');
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => { active = false; };
  }, [currentDate]);

  return { data, loading, error, currentDate, setCurrentDate, archiveDates };
}
