import { useMemo, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import type { Categories } from '../../types';
import styles from './category-page.module.css';
import { Button } from '../../components';

type CategoryPageProps = {
    categoryData: Categories;
};

type Sorting = 'asc' | 'desc' | 'none';

export const CategoryPage = ({ categoryData }: CategoryPageProps) => {
    const [searchParams, setSearchParams] = useSearchParams({ sorting: 'none' });
    const sorting = (searchParams.get('sorting') as Sorting) || 'none';

    const handleSorting = useCallback(
        (newSorting: Sorting) => {
            setSearchParams({ sorting: newSorting });
        },
        [setSearchParams],
    );

    const sortedData = useMemo(() => {
        if (sorting === 'none') return [...categoryData];

        return [...categoryData].sort((a, b) => {
            if (sorting === 'asc') {
                return new Date(a.created).valueOf() - new Date(b.created).valueOf();
            } else if (sorting === 'desc') {
                return new Date(b.created).valueOf() - new Date(a.created).valueOf();
            }
            return 0;
        });
    }, [categoryData, sorting]);

    return (
        <>
            <div className={styles.sorting}>
                <p>Sort by:</p>
                <Button size="xl" handleClick={() => handleSorting('asc')}>
                    Ascending
                </Button>
                <Button size="xl" handleClick={() => handleSorting('desc')}>
                    Descending
                </Button>
            </div>
            <ul>
                {sortedData.map((item) => (
                    <li key={item.id} className={styles.item}>
                        <Link to={`${item.id}`} className={styles.link}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};
