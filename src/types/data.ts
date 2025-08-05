import type { Character } from "./character";
import type { Episode } from "./episode";
import type { Location } from "./location";

export type Episodes = Episode[];
export type Characters = Character[];
export type Locations = Location[];

export type Categories = Episodes | Characters | Locations;
export type DataItem = Episode | Character | Location;

// Создаем маппинг с использованием строковых ключей
export type CategoryMap = {
  episodes: Episode;
  characters: Character;
  locations: Location;
};

// Создаем вспомогательный тип для получения правильного ключа
export type CategoryKey<T> = T extends Episodes ? 'episodes' :
                     T extends Characters ? 'characters' :
                     T extends Locations ? 'locations' :
                     never;