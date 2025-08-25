import type { DataSize } from '../../types';
import styles from './label.module.css';

type LabelProps = {
    inputId: string;
    label: string;
    size?: DataSize;
    withAsterisk?: boolean;
};

export const Label = ({
    inputId,
    label,
    size = 'md',
    withAsterisk = false,
}: LabelProps) => (
    <label
        className={styles.label}
        htmlFor={inputId}
        data-size={size}
        data-required={withAsterisk}
    >
        {label}
    </label>
);
