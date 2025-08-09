import type { DataRadius, DataSize, DataVariant } from '../../types';
import styles from './button.module.css';

type ButtonProps = {
    type?: HTMLButtonElement['type'];
    variant?: DataVariant;
    size?: DataSize;
    radius?: DataRadius;
    handleClick: () => void;
    children: React.ReactNode;
};

export const Button = ({
    type = 'button',
    variant = 'default',
    size = 'md',
    radius = 'xs',
    handleClick,
    children,
}: ButtonProps) => (
    <button
        className={styles.button}
        type={type}
        data-variant={variant}
        data-size={size}
        data-radius={radius}
        onClick={handleClick}
    >
        {children}
    </button>
);
