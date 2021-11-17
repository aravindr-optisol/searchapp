import React from 'react'

export const ProductCard = (props) => {
    return (
        <div>
            <div
                className="ProductCard"
                onClick={props.onClick}
            >
               {props.ProductType}
            </div>
        </div>
    )
}

