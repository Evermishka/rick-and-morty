import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
import { ROUTES } from "./constants";

function App() { 

  return (
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ ROUTES.MAIN } element={<p>React tasks</p>} />
          <Route path={ ROUTES.EPISODES } element={<p>React tasks</p>} />
          <Route path={ ROUTES.CHARACTERS } element={<p>React tasks</p>} />
          <Route path={ ROUTES.LOCATIONS } element={<p>React tasks</p>} />
        </Route>        
      </Routes>     
  )
}

export default App;
