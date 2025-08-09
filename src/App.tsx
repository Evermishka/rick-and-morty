import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts';
import { ROUTES } from './constants';
import {
    CategoryPage,
    CharacterPage,
    EpisodePage,
    LocationPage,
    LoginPage,
    MainPage,
    NotFoundPage,
} from './pages';
import { data } from './data';

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path={ROUTES.MAIN} element={<MainPage />} />
                <Route
                    path={ROUTES.CHARACTERS}
                    element={<CategoryPage categoryData={data.characters} />}
                />
                <Route
                    path={`${ROUTES.CHARACTERS}/:id`}
                    element={<CharacterPage characters={data.characters} />}
                />
                <Route
                    path={ROUTES.EPISODES}
                    element={<CategoryPage categoryData={data.episodes} />}
                />
                <Route
                    path={`${ROUTES.EPISODES}/:id`}
                    element={<EpisodePage episodes={data.episodes} />}
                />
                <Route
                    path={ROUTES.LOCATIONS}
                    element={<CategoryPage categoryData={data.locations} />}
                />
                <Route
                    path={`${ROUTES.LOCATIONS}/:id`}
                    element={<LocationPage locations={data.locations} />}
                />
                <Route path={ROUTES.LOGIN} element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default App;
