import { useState, useContext } from "react";
import "./Searchbar.scss";
import { UserSearchInputContext, FetchButtonContext } from "../../context/Context";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const { userInput, setUserInput } = useContext(UserSearchInputContext);
  const { fetchButton, setFetchButton } = useContext(FetchButtonContext);


  const handleClick = () => {
    setFetchButton(!fetchButton)
  }

  const clearInputfield = () => {
    setUserInput('')
  }

  return (
    <>
      <div className="searchbar_wrap">
        <form>
          <input type="text" name="" id="" onChange={(e) => setUserInput(e.target.value)} value={userInput} placeholder="Type Cocktail"/>
          <Link to='/user-search-list'>
            <input type="button" value="Search" onClick={handleClick}/>
          </Link>
          <input type="button" value="Clear Inputfield" onClick={clearInputfield}/>
        </form>
        
      </div>
    </>
  );
};

export default Searchbar;
