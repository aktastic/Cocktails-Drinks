import "./App.scss";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Scotch from "./components/scotchComponents/Scotch";
import RandomDrink from "./components/randomDrinkComponent/RandomDrink";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scotch" element={<Scotch />} />
        <Route path="/randomdrink" element={<RandomDrink />} />
      </Routes>
    </>
  );
}

export default App;
