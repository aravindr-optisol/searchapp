import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductCard } from '../../containers';
const Home = (props) => {
    const naviGate = useNavigate();
const CallByType=(type)=>{
    props.setCallByCardType(type)  
    props.MakeApiCall({
        ProductType: [type],
        Status: [],
        SearchKey:"",
        orderBy:"",
        orderBy:"mnaz"
    })
    return  naviGate(`/search`)
}
    return (
        <div>
            <p className="header-label">Browse Product by Type</p>
            <div className="HomeGrid">
                <ProductCard onClick={()=>CallByType("rubbersheet")} ProductType="Rubber sheet"/>
                <ProductCard onClick={()=>CallByType("flim")} ProductType="Flim"/>
                <ProductCard onClick={()=>CallByType("adhsives")} ProductType="Adhsives"/>
                <ProductCard onClick={()=>CallByType("foam")} ProductType="Foam"/>
                <ProductCard onClick={()=>CallByType("rubbersheet")} ProductType= "Rubber sheet"/>
            </div>
        </div>
    )
}

export default Home
