import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Scotch from "./components/scotchComponents/Scotch";
import RandomDrink from "./components/randomDrinkComponent/RandomDrink";
import GinList from "./components/ginComponent/GinList";
import VodkaList from "./components/vodkaComponent/VodkaList";


function App() {
  return (
    <>

      <Routes>

          <Route path="/gin"  element={<GinList/>}/>
          <Route path="/vodka"  element={<VodkaList/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/scotch" element={<Scotch />} />
        <Route path="/randomdrink" element={<RandomDrink />} />
      </Routes>

    </>
  );
}

export default App;
