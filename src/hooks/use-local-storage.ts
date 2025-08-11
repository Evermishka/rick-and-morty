import { useEffect, useState } from 'react';

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
    value: LocalStorageReturnValue,
    {
        setItem: (value: LocalStorageSetValue) => void;
        removeItem: () => void;
    },
];

type GetStorageValue = (key: string) => LocalStorageReturnValue;

const getStorageValue: GetStorageValue = (key) => {
    try {
        const savedValue = localStorage.getItem(key);
        return savedValue || null;
    } catch (error) {
        console.error(
            `Не удалось получить данные по ключу ${key} из localStorage:`,
            error,
        );
        return null;
    }
};

export const useLocalStorage: UseLocalStorage = (key) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key);
    });

    const setItem = (newValue: string) => {
        try {
            localStorage.setItem(key, newValue);
            setValue(newValue);
        } catch (error) {
            console.error(
                `Не удалось сохранить данные по ключу ${key} в localStorage:`,
                error,
            );
        }
    };

    const removeItem = () => {
        try {
            localStorage.removeItem(key);
            setValue('');
        } catch (error) {
            console.error(
                `Не удалось удалить данные данные по ключу ${key} из localStorage:`,
                error,
            );
        }
    };

    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === key) {
                setValue(event.newValue || null);
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [key]);

    return [value, { setItem, removeItem }];
};
