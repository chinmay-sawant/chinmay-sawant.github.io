import { useEffect, useState } from 'react';
import { PAGE_SECTIONS } from '../utils/sections';

const DEFAULT_IDS = PAGE_SECTIONS.map(section => section.id);

export function useActiveSection(sectionIds = DEFAULT_IDS) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? 'about');
  const idsKey = sectionIds.join(',');

  useEffect(() => {
    const ids = idsKey.split(',').filter(Boolean);
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return undefined;
    let frame = null;

    const update = () => {
      frame = null;
      const readingLine = Math.max(140, window.innerHeight * 0.3);
      let current = sections[0].id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top > readingLine) break;
        current = section.id;
      }
      setActiveId(current);
    };
    const schedule = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const resize = new ResizeObserver(schedule);
    sections.forEach(section => resize.observe(section));
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      resize.disconnect();
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [idsKey]);

  return activeId;
}
