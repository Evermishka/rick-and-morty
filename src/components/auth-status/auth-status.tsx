import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth-provider';
import { Button } from '../button/button';
import { ROUTES } from '../../constants';
import styles from './auth-status.module.css';

export const AuthStatus = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth?.logout(() => {
            navigate(ROUTES.MAIN);
        });
    };

    if (auth?.user === null) {
        return <p className={styles.authMessage}>You are not logged in</p>;
    }

    return (
        <p className={styles.authMessage}>
            You are logged in as {auth?.user}
            <Button onClick={handleLogout}>Log out</Button>
        </p>
    );
};
