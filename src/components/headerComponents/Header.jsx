
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
          <h2>Cocktails & Drinks!</h2>
          <p>WELCOME TO THE WORLD OF COCKTAILS AND DRINKS</p>
        </div>
        
        <Searchbar />
      </header>
    </>
  );
};

export default Header;
