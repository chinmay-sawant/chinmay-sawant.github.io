import { createContext } from 'react';

export const GitHubStarsContext = createContext({
  starsMap: {},
  repos: [],
  loading: true,
});
