import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import { useState } from 'react'
import { SearchFetchContext, FetchButtonContext, UserSearchInputContext } from "./context/Context";
import SearchFetch from "./data/SearchFetch";
import SearchList from "./components/headerComponents/SearchList";


function App() {
  const [userInput, setUserInput] = useState('');
  const [searchFetchData, setSearchFetchData] = useState(null);
  const [fetchButton, setFetchButton] = useState(false);
  return (
    <>
    <FetchButtonContext.Provider value={{ fetchButton, setFetchButton }}>
      <UserSearchInputContext.Provider value={{ userInput, setUserInput }}>
    <SearchFetchContext.Provider value={{ searchFetchData, setSearchFetchData }}>
      <SearchFetch />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/user-search-list" element={<SearchList />}/>
    </Routes>

    </SearchFetchContext.Provider>
    </UserSearchInputContext.Provider>
    </FetchButtonContext.Provider>
    
    
      
    </>
  );
}

export default App;
