import "./App.css";
import CatDryFood from "./Pages/CatDryFood";
import Mainpage from "./Pages/Mainpage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/shop/cat-dry-food' element={<CatDryFood />} />
      </Routes>
    </>
  );
}

export default App;
