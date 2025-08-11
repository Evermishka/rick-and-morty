import type React from 'react';
import type { DataRadius, DataSize, DataVariant, DataWidth } from '../../types';
import styles from './button.module.css';

type ButtonProps = {
    type?: HTMLButtonElement['type'];
    variant?: DataVariant;
    size?: DataSize;
    radius?: DataRadius;
    width?: DataWidth;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
};

export const Button = ({
    type = 'button',
    variant = 'default',
    size = 'md',
    radius = 'xs',
    width = 'auto',
    onClick,
    children,
}: ButtonProps) => (
    <button
        className={styles.button}
        type={type}
        data-variant={variant}
        data-size={size}
        data-radius={radius}
        data-width={width}
        onClick={onClick}
    >
        {children}
    </button>
);
