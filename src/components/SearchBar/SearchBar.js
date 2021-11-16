import React, { useState } from 'react'
import { Outlet, useNavigate, Link } from 'react-router-dom'
const SearchSvg = () => {
    return (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>)
}
const SearchBar = (props) => {
    const naviGate = useNavigate();
    const [SearchKey, setSearchKey] = useState("")

    return (
        <div>

            <div class="mb-28 pb-24">
                <div className="nav-bar">
                    <div className="nav-bar-container">
                        <Link to="/"><h1>LOGO</h1></Link>
                    </div>

                    <div className="search-box-container">
                        <div class="relative">
                            <input type="text" class="search-input-box" placeholder="Search anything..." onChange={(event) => { setSearchKey(event.target.value) }} />
                            <div class="absolute top-4 w-1/12 right-3 text-center">
                                <button onClick={() => {
                                    let reqObj = {
                                        ProductType: [],
                                        Status: [],
                                        SearchKey:SearchKey
                                    }
                                    props.MakeApiCall(reqObj)
                                    naviGate(`/s`)

                                }}>
                                    <SearchSvg />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Outlet />
        </div>
    )
}

export default SearchBar