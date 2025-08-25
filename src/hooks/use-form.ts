import { useRef } from 'react';

export type FormData = {
    [key: string]: string;
};

export type SubmitCb = (data: FormData) => void;

export const useForm = (formData: FormData, onSubmit: SubmitCb) => {
    const valueRef = useRef(formData);

    const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
        if (event.target instanceof HTMLInputElement) {
            valueRef.current = {
                ...valueRef.current,
                [event.target.name]: event.target.value,
            };
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(valueRef.current);
    };

    return {
        handleChange,
        handleSubmit,
    };
};
