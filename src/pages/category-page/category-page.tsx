import { Link } from 'react-router-dom';
import { type episodes, type characters, type locations } from '../../types';
import styles from './category-page.module.css';

type CategoryPageProps = {
    categoryData: episodes | characters | locations;
}

export const CategoryPage = ({ categoryData }: CategoryPageProps) => {
    return (
        <ul>
            {categoryData.map(item => (
                <li key={item.id} className={styles.item}>
                    <Link to="#" className={styles.link}>{item.name}</Link>
                </li>
            ))}
        </ul>
    )
}