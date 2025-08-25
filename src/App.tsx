import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/auth-provider';
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
import { PrivateRoute } from './components';

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path={ROUTES.MAIN} element={<MainPage />} />
                    <Route
                        path={ROUTES.CHARACTERS}
                        element={
                            <PrivateRoute>
                                <CategoryPage categoryData={data.characters} />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path={`${ROUTES.CHARACTERS}/:id`}
                        element={
                            <PrivateRoute>
                                <CharacterPage characters={data.characters} />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path={ROUTES.EPISODES}
                        element={
                            <PrivateRoute>
                                <CategoryPage categoryData={data.episodes} />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path={`${ROUTES.EPISODES}/:id`}
                        element={
                            <PrivateRoute>
                                <EpisodePage episodes={data.episodes} />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path={ROUTES.LOCATIONS}
                        element={
                            <PrivateRoute>
                                <CategoryPage categoryData={data.locations} />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path={`${ROUTES.LOCATIONS}/:id`}
                        element={
                            <PrivateRoute>
                                <LocationPage locations={data.locations} />
                            </PrivateRoute>
                        }
                    />
                    <Route path={ROUTES.LOGIN} element={<LoginPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;
