import { Button, Form, TextInput } from '../../components';
import type { FormData } from '../../hooks';
import styles from './login-page.module.css';

const initialState = {
    email: '',
    password: '',
};

export const LoginPage = () => {
    const handleSubmit = (data: FormData) => {
        console.log('LoginData', data);
    };

    return (
        <div className={styles.wrapper}>
            <Form initialState={initialState} onSubmit={handleSubmit}>
                <TextInput
                    type="email"
                    name="email"
                    label="Enter your email"
                    placeholder="example@email.com"
                />
                <TextInput
                    type="password"
                    name="password"
                    label="Enter your password"
                    placeholder="Authentication password"
                />
                <Button type="submit" variant="filled" size="xl" width="full">
                    Log in
                </Button>
            </Form>
        </div>
    );
};
