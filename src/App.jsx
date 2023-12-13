import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AlkFrei from "./components/alkFrei/AlkFrei"
import Rum from "./components/rum/Rum"
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/rum" element={<Rum/>}/>
        <Route path="/alkFrei" element={<AlkFrei/>}/>
      </Routes>
    </>
  );
}

export default App;
