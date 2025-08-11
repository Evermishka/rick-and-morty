import { Link, Outlet } from 'react-router-dom';
import { AuthStatus, Navigation } from '../../components';
import { ROUTES } from '../../constants';
import styles from './main-layout.module.css';

export const MainLayout = () => {
    return (
        <div className={styles.mainLayout}>
            <header className={styles.header}>
                <AuthStatus />
                <Link className={styles.title} to={ROUTES.MAIN}>
                    <h1>Rick and Morty</h1>
                </Link>
                <Navigation />
            </header>
            <section className={styles.main}>
                <Outlet />
            </section>
        </div>
    );
};
