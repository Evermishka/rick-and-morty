import type { characters as charactersType, episodes as  episodesType, locations as locationsType } from '../types';
import characters from './characters.json';
import episodes from './episode.json';
import locations from './location.json';

export const data = {
  episodes: episodes as  episodesType,
  characters: characters as charactersType,
  locations: locations as locationsType,
};