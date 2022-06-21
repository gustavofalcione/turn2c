import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home/index"
import { Records } from "./pages/Records"

export const MappedRoutes = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/registros" element={<Records />}></Route>
      </Routes>
    </Router>
  )
}