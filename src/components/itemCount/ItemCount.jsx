import React from 'react';
import { useState } from 'react';
import "./itemCount.scss"


export const ItemCount = ({stock, initial, agregarProducto}) => {
    const [contador, setContador]= useState(initial);

    const incrementar = ()=>{
        if (contador < stock){
        setContador(contador +1)
        }
    }

    const decrementar = ()=>{
        if (contador > 0){
        setContador(contador -1)
        }
    }

    return (
        <div className='item-count' >
            <div className='count'>
            <p>Productos {contador}</p>
            <button onClick ={incrementar} disabled = {contador === stock} className="boton-control" > + </button>
            <button onClick ={decrementar} disabled = {contador === initial} className="boton-control" > - </button>
            </div>
            <button className='add' onClick ={()=>(agregarProducto(contador))}> Agregar al carrito </button>
        </div>
    )
}