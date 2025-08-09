import { useRef } from 'react';
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
    value = '',
    placeholder = '',
    error = false,
    variant = 'default',
    radius = 'md',
    size = 'md',
    disabled = false,
}: InputProps) => {
    const inputRef = useRef(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target instanceof HTMLInputElement) {
            inputRef.current = e.target.value;
        }
    };

    return (
        <input
            className={styles.input}
            id={inputId}
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            data-variant={variant}
            data-radius={radius}
            data-size={size}
            data-error={!!error}
            onChange={handleChange}
        />
    );
};
