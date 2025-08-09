import { useForm, type FormData, type SubmitCb } from '../../hooks';

type SigninProps = {
    initialState: FormData;
    onSubmit: SubmitCb;
    children: React.ReactNode;
};

export const Form = ({ initialState, onSubmit, children }: SigninProps) => {
    const { handleChange, handleSubmit } = useForm(initialState, onSubmit);

    return (
        <>
            <form onSubmit={handleSubmit} onChange={handleChange}>
                {children}
            </form>
        </>
    );
};
