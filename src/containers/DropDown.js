import React from 'react'
export const DropDown = (props) => {
    return (
        <div>
        <select className="py-2 px-4 bg-gray-100 w-auto outline-none mb-4" name="sortlist" onChange={(event)=>props.onChange(event)}>
           {
               props.OptionArray.map((data,index)=>{
                return <option key={index} className="bg-white" value={data.value}>{data.Name}</option>
               })
           }           
        </select>
        </div>
    )
}