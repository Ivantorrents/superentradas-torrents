import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import { ItemCount } from '../itemCount/ItemCount'
import { Item } from '../itemListContainer/Item'
import "./ItemDetailContainer.scss"

export const ItemDetail = ({title, description, price, pictureUrl}) => {
  const {agregarProducto} = useContext(CartContext)

  const onAdd = (contador) =>{
    const newProduct={...Item, qty: contador}
    agregarProducto(newProduct)
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
          <ItemCount initial={1} stock={20} onAdd={onAdd} />
        </div>
  )
}

