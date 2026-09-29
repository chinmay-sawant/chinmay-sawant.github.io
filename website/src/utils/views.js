export const PORTFOLIO_VIEWS = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Selected work' },
  { id: 'projects', label: 'Archived projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
];

const VIEW_ALIASES = new Map([
  ['top', 'about'],
  ['archive', 'projects'],
  ['recent', 'projects'],
  ['hobbies', 'experience'],
]);

export function viewFromHash(hash) {
  const id = hash.slice(1);
  return PORTFOLIO_VIEWS.find(view => view.id === id)?.id ?? VIEW_ALIASES.get(id);
}
