import "./App.scss";
import AlkFrei from "./components/alkFrei/AlkFrei";
import Rum from "./components/rum/Rum";
import Home from "./pages/Home";
import Scotch from "./components/scotchComponents/Scotch";
import RandomDrink from "./components/randomDrinkComponent/RandomDrink";
import GinList from "./components/ginComponent/GinList";
import VodkaList from "./components/vodkaComponent/VodkaList";
import { useState } from "react";
import {
  SearchFetchContext,
  FetchButtonContext,
  UserSearchInputContext,
} from "./context/Context";
import SearchFetch from "./data/SearchFetch";
import SearchList from "./components/headerComponents/SearchList";

function App() {
  const [userInput, setUserInput] = useState("");
  const [searchFetchData, setSearchFetchData] = useState(null);
  const [fetchButton, setFetchButton] = useState(false);
  return (
    <>

    
    
      


      <FetchButtonContext.Provider value={{ fetchButton, setFetchButton }}>
        <UserSearchInputContext.Provider value={{ userInput, setUserInput }}>
          <SearchFetchContext.Provider
            value={{ searchFetchData, setSearchFetchData }}
          >
            <SearchFetch />
            <Routes>
              <Route path="/gin" element={<GinList />} />
              <Route path="/vodka" element={<VodkaList />} />
              <Route path="/" element={<Home />} />
              <Route path="/scotch" element={<Scotch />} />
              <Route path="/randomdrink" element={<RandomDrink />} />
              <Route path="/rum" element={<Rum />} />
              <Route path="/alkFrei" element={<AlkFrei />} />
              <Route path="/user-search-list" element={<SearchList />} />
            </Routes>
          </SearchFetchContext.Provider>
        </UserSearchInputContext.Provider>
      </FetchButtonContext.Provider>

    </>
  );
}

export default App;
