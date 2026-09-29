export const PAGE_SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'stack', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'hobbies', label: 'Off-duty' },
];

export const HEADER_NAV = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'stack', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
];

export function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  element.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth', block: 'start' });
  window.history.replaceState(null, '', `#${id}`);
}
