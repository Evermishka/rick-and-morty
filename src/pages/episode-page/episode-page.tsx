import { useData } from '../../hooks';
import { transformDate } from '../../utils';
import type { Episode } from '../../types';
import styles from './episode-page.module.css';

type EpisodePageProps = {
    episodes: Episode[];
};

export const EpisodePage = ({ episodes }: EpisodePageProps) => {
    const episode = useData<Episode>(episodes);

    if (!episode) {
        return null;
    }

    return (
        <>
            <h1 className={styles.episodeName}>{episode.name}</h1>
            <p>
                <span>Air date:</span> {episode.air_date}
            </p>
            <p>
                <span>Episode:</span> {episode.episode}
            </p>
            <p>
                <span>Created:</span> {transformDate(episode.created)}
            </p>
        </>
    );
};
