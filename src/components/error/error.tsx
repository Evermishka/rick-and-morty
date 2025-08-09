import type { DataSize } from '../../types';
import styles from './error.module.css';

type ErrorProps = {
    error?: string | boolean;
    size?: DataSize;
};

export const Error = ({ error = false, size = 'md' }: ErrorProps) => (
    <p className={styles.error} data-size={size}>
        {error}
    </p>
);
