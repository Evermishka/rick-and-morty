import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts"

function App() {

  return (
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<p>React tasks</p>} />
        </Route>        
      </Routes>     
  )
}

export default App
