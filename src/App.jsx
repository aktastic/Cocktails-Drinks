import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import GinList from "./components/ginComponent/GinList";
import VodkaList from "./components/vodkaComponent/VodkaList";

function App() {
  return (
    <>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/gin"  element={<GinList/>}/>
          <Route path="/vodka"  element={<VodkaList/>}/>
        </Routes>

    </>
  );
}

export default App;
