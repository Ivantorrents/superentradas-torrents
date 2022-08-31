import React from 'react'
import './Item.css'

export const Item = ({data}) => {
    const {name, img, price} = data
  return (
    <div>
        <div className="product" key={name}>
                    <img src={img} alt="" />
                    <h1>{name}</h1>
                    <h2>{price}</h2>
                </div>
    </div>
  )
}

