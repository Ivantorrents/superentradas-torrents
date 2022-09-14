import React from 'react'
import { ItemCount } from '../itemCount/ItemCount'
import "./ItemDetailContainer.scss"

export const ItemDetail = ({title, description, price, pictureUrl}) => {

  const agregarProducto = (contador) =>{
    console.log(agregarProducto, contador)
  }

  return (
    <div id='item-detail' >
        <div id='portada' >
            <img src={pictureUrl} alt={title}/>
        </div>
        
        <div id='data' >
            <h1>{title}</h1>
            <h2> {description} </h2>
            <h3> ${price} </h3>

        </div>
          <ItemCount initial={1} stock={20} agregarProducto={agregarProducto} />
        </div>
  )
}

