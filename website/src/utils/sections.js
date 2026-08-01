/** Page sections used by header nav, section rail, and scroll spy. */
export const PAGE_SECTIONS = [
  { id: 'top', label: 'Intro' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'writing', label: 'Writing' },
  { id: 'hobbies', label: 'Hobbies' },
];

/** Primary header links (subset of PAGE_SECTIONS). */
export const HEADER_NAV = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'writing', label: 'Writing' },
];

export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.history.replaceState(null, '', `#${id}`);
}
