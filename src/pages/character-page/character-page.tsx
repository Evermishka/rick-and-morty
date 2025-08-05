import { useData } from '../../hooks';
import { transformDate } from '../../utils';
import type { Character, Characters } from '../../types';
import styles from './character-page.module.css';

type CharacterPageProps = {
  characters: Character[];
};

export const CharacterPage = ({ characters }: CharacterPageProps) => {
  const character = useData<Characters>(characters);

  if (!character) {
    return null;
  }

  return (
    <div className={styles.characterPage}>
        <div className={styles.characterDescription}>
          <h1 className={styles.characterName}>{character.name}</h1> 
          <p><span>Status:</span> {character.status}</p>
          <p><span>Species:</span> {character.species}</p>
          <p><span>Type:</span> {character.type}</p>
          <p><span>Gender:</span> {character.gender}</p>
          <p><span>Created:</span> {transformDate(character.created)}</p>
        </div>
        <img src={character.image} />
    </div>
  );
};