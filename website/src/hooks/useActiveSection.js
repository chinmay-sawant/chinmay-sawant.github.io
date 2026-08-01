import { useEffect, useState } from 'react';
import { PAGE_SECTIONS } from '../utils/sections';

const DEFAULT_IDS = PAGE_SECTIONS.map((s) => s.id);

/**
 * Tracks which page section is most visible. Shared by Header and SectionNav
 * so active states stay in sync.
 */
export function useActiveSection(sectionIds = DEFAULT_IDS) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? 'top');
  // Stable key for dependency (array identity can change across renders)
  const idsKey = sectionIds.join(',');

  useEffect(() => {
    const ids = idsKey.split(',').filter(Boolean);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (elements.length === 0) return undefined;

    const ratios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio);
        });

        if (window.scrollY < 80) {
          setActiveId(ids[0]);
          return;
        }

        let bestId = ids[0];
        let bestRatio = -1;
        ids.forEach((id) => {
          const ratio = ratios.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        setActiveId(bestId);
      },
      {
        root: null,
        rootMargin: '-20% 0px -45% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [idsKey]);

  return activeId;
}
