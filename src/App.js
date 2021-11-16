import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import SearchBar from "./components/SearchBar/SearchBar"
import Home from "./components/Home/Home"
import Result from "./components/Result/Result"
import { FilterBy } from './APIMock'
const App = () => {
  const [SearchCall, setSearchCall] = useState("")
  const [callByCardType, setCallByCardType] = useState("")
  const [Inventory, setInventory] = useState({})
  const MakeApiCall = (apiObj) => {
    /*
    {
            ProductType:[],
             Status:[],
            SearchKey:props.SearchCall
        }
    */
    let makeSearch = FilterBy(apiObj)
    return setInventory(makeSearch)
  }




  return (
    <div className="min-h-screen w-4/5 ml-auto mr-auto">
      <Routes>
        <Route element={
          <SearchBar
            setSearchCall={setSearchCall}
            MakeApiCall={MakeApiCall}
          />
        } >
          <Route path="/" element={
            <Home
              MakeApiCall={MakeApiCall}
              setCallByCardType={setCallByCardType}
            />
          } />
          <Route path="s" element={
            <Result
              MakeApiCall={MakeApiCall}
              callByCardType={callByCardType}
              SearchCall={SearchCall}
              Inventory={Inventory}
            />
          } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;