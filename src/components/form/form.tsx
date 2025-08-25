import { useForm, type FormData, type SubmitCb } from '../../hooks';
import styles from './form.module.css';

type SigninProps = {
    initialState: FormData;
    onSubmit: SubmitCb;
    children: React.ReactNode;
};

export const Form = ({ initialState, onSubmit, children }: SigninProps) => {
    const { handleChange, handleSubmit } = useForm(initialState, onSubmit);

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit} onChange={handleChange}>
                {children}
            </form>
        </>
    );
};
