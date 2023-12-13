
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";
import Searchbar from "./Searchbar";
import { useContext } from "react";
import "./Searchbar.scss";
import { UserSearchInputContext } from "../../context/Context"


const Header = () => {

  const { userInput, setUserInput } = useContext(UserSearchInputContext);

  const clearInputfield = () => {
    setUserInput('')
  }
  return (
    <>
      <header>
        <nav>

          <NavLink to='/'onClick={clearInputfield}>
            <h1>Drinks&Chill</h1>
          </NavLink>
          
          <NavLink to='/' onClick={clearInputfield}>Home</NavLink>

        </nav>
        <div>
          <h1>Cocktails & Drinks!</h1>
          <p>HERZLICH WILLKOMEN IN DER WELT DER COKTAILS UND GETRÄNKE</p>
        </div>
        
        <Searchbar />
      </header>
    </>
  );
};

export default Header;
