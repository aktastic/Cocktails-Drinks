import "./Header.scss";
import Searchbar from "./Searchbar";
const Header = () => {
  return (
    <>
      <header>
        <nav>
          <h1>Drinks&Chill</h1>
          <a href="#">MOME</a>
        </nav>
        <h1>Cocktails & Drinks</h1>
        <h2>HERZLICH WILLKOMEN IN DER WELT DER COKTAILS UND GETRÄNKE</h2>
        <Searchbar />
      </header>
    </>
  );
};

export default Header;
