import type { Character } from "./character";
import type { Episode } from "./episode";
import type { Location } from "./location";

export type Episodes = Episode[];
export type Characters = Character[];
export type Locations = Location[];

export type Categories = Episodes | Characters | Locations;
export type DataItem = Episode | Character | Location;
