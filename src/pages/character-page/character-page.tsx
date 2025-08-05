import { useParams } from 'react-router-dom';
import styles from './character-page.module.css';
import { useEffect, useState } from 'react';
import type { Character } from '../../types';
import { transformDate } from '../../utils';

type CharacterPageProps = {
  characters: Character[];
};

export const CharacterPage = ({ characters }: CharacterPageProps) => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const character = characters.find((character) => character.id.toString() === id);
    if (character) {
      setCharacter(character);
    }    
  }, [characters, id]);

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