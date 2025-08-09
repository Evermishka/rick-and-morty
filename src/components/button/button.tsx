import type React from 'react';
import type { DataRadius, DataSize, DataVariant } from '../../types';
import styles from './button.module.css';

type ButtonProps = {
    type?: HTMLButtonElement['type'];
    variant?: DataVariant;
    size?: DataSize;
    radius?: DataRadius;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
};

export const Button = ({
    type = 'button',
    variant = 'default',
    size = 'md',
    radius = 'xs',
    onClick,
    children,
}: ButtonProps) => (
    <button
        className={styles.button}
        type={type}
        data-variant={variant}
        data-size={size}
        data-radius={radius}
        onClick={onClick}
    >
        {children}
    </button>
);
