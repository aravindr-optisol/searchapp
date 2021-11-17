import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import SearchBar from "./components/SearchBar/SearchBar"
import Home from "./containers/Home/Home"
import Result from "./containers/Result/Result"
import { FilterBy } from './APIMock/APIMock'
const App = () => {
  const [SearchCall, setSearchCall] = useState("")
  const [callByCardType, setCallByCardType] = useState("")
  const [Inventory, setInventory] = useState({})
  const MakeApiCall = (apiObj) => {
    /*
    {
      ProductType:[],
      Status:[],
      SearchKey:"",
      orderBy:mtaz,
      ByPageNo:0
    }
    */
    let makeSearch = FilterBy(apiObj)
    return setInventory(makeSearch)
  }
  return (
    <div className="min-h-screen bg-gray-100 w-4/5 ml-auto mr-auto">
      <Routes>
        <Route element={
          <SearchBar
            setSearchCall={setSearchCall}
            MakeApiCall={MakeApiCall}
            setCallByCardType={setCallByCardType}
          />
        } >
          <Route path="/" element={
            <Home
              MakeApiCall={MakeApiCall}
              setCallByCardType={setCallByCardType}
            />
          } />
          <Route path="search" element={
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
