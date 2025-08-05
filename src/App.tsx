import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
import { ROUTES } from "./constants";
import { CategoryPage, CharacterPage } from "./pages";
import { data } from "./data";

function App() { 

  return (
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ ROUTES.MAIN } element={<p>React tasks</p>} />
          <Route path={ ROUTES.CHARACTERS } element={<CategoryPage categoryData={data.characters} />} />
          <Route path={ `${ROUTES.CHARACTERS}/:id` } element={<CharacterPage characters={data.characters} />} />
          <Route path={ ROUTES.EPISODES } element={<CategoryPage categoryData={data.episodes} />} />
          <Route path={ ROUTES.LOCATIONS } element={<CategoryPage categoryData={data.locations} />} />
        </Route>        
      </Routes>     
  )
}

export default App;
