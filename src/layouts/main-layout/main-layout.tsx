import { Outlet } from 'react-router-dom';
import styles from './main-layout.module.css';
import { Navigation } from '../../components';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';

export const MainLayout = () => {
    return (
        <div className={styles.mainLayout}>
            <header className={styles.header}>
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
