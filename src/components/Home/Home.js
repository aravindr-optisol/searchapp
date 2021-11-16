import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
    const naviGate = useNavigate();

    return (
        <div>
            <h1>Browse Product By Type</h1>
            <div class="grid grid-cols-5 py-4 px-6 gap-4 justify-items-stretch h-48">
                <div 
                class="text-gray-700 font-bold bg-white shadow-lg flex justify-center items-center px-4 py-2 cursor-pointer"
                onClick={() => {       
                    props.setCallByCardType("rubbersheet")              
                    props.MakeApiCall({
                        ProductType: ["rubbersheet"],
                        Status: [],
                        SearchKey:"",
                        orderBy:"",
                        orderBy:"mnza"
                    })

                    naviGate(`/s?k=rubbersheet&ps=all&sort=asc`)
                 }}
                >Rubber sheet</div>
                <div 
                class="text-gray-700 font-bold bg-white shadow-lg flex justify-center items-center px-4 py-2 cursor-pointer"
                onClick={() => { 
                    props.setCallByCardType("flim")
                    props.MakeApiCall({
                        ProductType: ["flim"],
                        Status: [],
                        SearchKey:"",
                        orderBy:"mnza"
                    })

                    naviGate(`/s`) 
                }}
                >
                    Flim
                </div>
                <div 
                class="text-gray-700 font-bold bg-white shadow-lg flex justify-center items-center px-4 py-2 cursor-pointer"
                onClick={() => { 
                    props.setCallByCardType("adhsives")
                    props.MakeApiCall({
                        ProductType: ["adhsives"],
                        Status: [],
                        SearchKey:"",
                        orderBy:"mnza"
                    })

                    naviGate(`/s`)
                 }}
                >Adhsives</div>
                <div 
                class="text-gray-700 font-bold bg-white shadow-lg flex justify-center items-center px-4 py-2 cursor-pointer"
                onClick={() => { 
                    props.setCallByCardType("foam")

                    props.MakeApiCall({
                        ProductType: ["foam"],
                        Status: [],
                        SearchKey:"",
                        orderBy:"mnza"
                    })

                    naviGate(`/s`)
                 }}
                >Foam</div>
            </div>
        </div>
    )
}

export default Home
