import { createContext } from 'react';

export const GitHubStarsContext = createContext({
  starsMap: {},
  loading: true,
});