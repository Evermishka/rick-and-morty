import { useData } from '../../hooks';
import { transformDate } from '../../utils';
import type { Location, Locations } from '../../types';
import styles from './location-page.module.css';

type LocationPageProps = {
  locations: Location[];
};

export const LocationPage = ({ locations }: LocationPageProps) => {
  const location = useData<Locations>(locations);

  if (!location) {
    return null;
  }

  return (
    <>        
      <h1 className={styles.locationName}>{location.name}</h1> 
      <p><span>Type:</span> {location.type}</p>
      <p><span>Dimension:</span> {location.dimension}</p>
      <p><span>Created:</span> {transformDate(location.created)}</p>
    </>
  );
};