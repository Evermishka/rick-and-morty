import { NavLink } from 'react-router-dom';
import { NAVIGATION } from '../../constants';
import styles from './navigation.module.css';

export const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationList}>
                {NAVIGATION.map((e) => (
                    <li className={styles.navigationItem} key={e.path}>
                        <NavLink
                            to={e.path}
                            className={({ isActive }) =>
                                isActive
                                    ? styles.navigationLink +
                                      ' ' +
                                      styles.navigationLink__active
                                    : styles.navigationLink
                            }
                        >
                            {e.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
