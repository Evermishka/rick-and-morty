import { useId } from 'react';
import { Label } from '../label/label';
import { Error } from '../error/error';
import { Input } from '../input/input';
import type { DataRadius, DataSize, DataVariant } from '../../types';
import styles from './text-input.module.css';

type TextInputProps = {
    name: string;
    type?: HTMLInputElement['type'];
    placeholder: string;
    label: string;
    error?: string | boolean;
    variant?: DataVariant;
    radius?: DataRadius;
    size?: DataSize;
    disabled?: boolean;
    withAsterisk?: boolean;
};

export const TextInput = ({
    name,
    type = 'text',
    placeholder,
    label,
    error = false,
    variant = 'default',
    radius = 'xs',
    size = 'md',
    disabled = false,
    withAsterisk = false,
}: TextInputProps) => {
    const inputId = useId();

    return (
        <div className={styles.wrapper}>
            <Label
                inputId={inputId}
                label={label}
                size={size}
                withAsterisk={withAsterisk}
            />
            <div className={styles.inputContainer} data-size={size}>
                <Input
                    inputId={inputId}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    variant={variant}
                    radius={radius}
                    size={size}
                    error={!!error}
                />
            </div>
            {error && <Error error={error} size={size} />}
        </div>
    );
};
