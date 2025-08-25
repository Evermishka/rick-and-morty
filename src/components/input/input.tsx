import styles from './input.module.css';
import type { DataRadius, DataSize, DataVariant } from '../../types';
type InputProps = {
    inputId: string;
    name: string;
    type: HTMLInputElement['type'];
    value?: string;
    placeholder?: string;
    error?: string | boolean;
    variant?: DataVariant;
    radius?: DataRadius;
    size?: DataSize;
    disabled?: boolean;
};

export const Input = ({
    inputId,
    name,
    type = 'text',
    placeholder = '',
    error = false,
    variant = 'default',
    radius = 'md',
    size = 'md',
    disabled = false,
}: InputProps) => {
    return (
        <input
            className={styles.input}
            id={inputId}
            name={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            data-variant={variant}
            data-radius={radius}
            data-size={size}
            data-error={!!error}
        />
    );
};
