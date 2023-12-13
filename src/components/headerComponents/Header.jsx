import { Link } from "react-router-dom";
import "./Header.scss";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <h1>Drinks&Chill</h1>
          <Link to="/">Home</Link>
        </nav>
        <h1>Cocktails & Drinks</h1>
        <h2>HERZLICH WILLKOMEN IN DER WELT DER COKTAILS UND GETRÄNKE</h2>
        <Searchbar />
      </header>
    </>
  );
};

export default Header;
