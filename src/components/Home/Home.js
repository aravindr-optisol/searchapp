import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
    const naviGate = useNavigate();

    return (
        <div>
            <p className="header-label">Browse Product by Type</p>
            <div class="HomeGrid">
                <div 
                class="ProductCard"
                onClick={() => {       
                    props.setCallByCardType("rubbersheet")              
                    props.MakeApiCall({
                        ProductType: ["rubbersheet"],
                        Status: [],
                        SearchKey:"",
                        orderBy:"",
                        orderBy:"mnaz"
                    })

                    naviGate(`/s?k=rubbersheet&ps=all&sort=asc`)
                 }}
                >
                    Rubber sheet
                </div>
                <div 
                class="ProductCard"
                onClick={() => { 
                    props.setCallByCardType("flim")
                    props.MakeApiCall({
                        ProductType: ["flim"],
                        Status: [],
                        SearchKey:"",
                        orderBy:"mnaz"
                    })

                    naviGate(`/s`) 
                }}
                >
                    Flim
                </div>
                <div 
                class="ProductCard"
                onClick={() => { 
                    props.setCallByCardType("adhsives")
                    props.MakeApiCall({
                        ProductType: ["adhsives"],
                        Status: [],
                        SearchKey:"",
                        orderBy:"mnaz"
                    })

                    naviGate(`/s`)
                 }}
                >Adhsives</div>
                <div 
                class="ProductCard"
                onClick={() => { 
                    props.setCallByCardType("foam")

                    props.MakeApiCall({
                        ProductType: ["foam"],
                        Status: [],
                        SearchKey:"",
                        orderBy:"mnaz"
                    })

                    naviGate(`/s`)
                 }}
                >Foam</div>
            </div>
        </div>
    )
}

export default Home
