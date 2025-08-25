import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Form, TextInput } from '../../components';
import { useAuth } from '../../context/auth-provider';
import type { FormData } from '../../hooks';
import styles from './login-page.module.css';
import { ROUTES } from '../../constants';

const initialState = {
    email: '',
    password: '',
};

export const LoginPage = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || ROUTES.MAIN;

    const handleSubmit = (data: FormData) => {
        const email = data.email;
        auth?.login(email, () => {
            navigate(from, {
                replace: true,
            });
        });
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
