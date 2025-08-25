import type { Characters, Episodes, Locations } from '../types';
import characters from './characters.json';
import episodes from './episode.json';
import locations from './location.json';

export const data = {
    episodes: episodes as Episodes,
    characters: characters as Characters,
    locations: locations as Locations,
};
