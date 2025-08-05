import { Link } from 'react-router-dom';
import type { Categories } from '../../types';
import styles from './category-page.module.css';

type CategoryPageProps = {
    categoryData: Categories;
}

export const CategoryPage = ({ categoryData }: CategoryPageProps) => {
    return (
        <ul>
            {categoryData.map(item => (
                <li key={item.id} className={styles.item}>
                    <Link to={`${item.id}`} className={styles.link}>{item.name}</Link>
                </li>
            ))}
        </ul>
    )
}