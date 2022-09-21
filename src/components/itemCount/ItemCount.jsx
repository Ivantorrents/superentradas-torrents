import React from 'react';
import { useState } from 'react';
import "./itemCount.scss"


export const ItemCount = ({stock, initial, onAdd}) => {
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
            <p>Stock disponible: {stock} </p>
            <button disabled = {stock === 0} onClick ={decrementar}  className="boton-control" > - </button>
            <p> {contador} </p>
            <button disabled = {stock === 0} onClick ={incrementar}  className="boton-control" > + </button>
            </div>
            <button disabled = {stock === 0} className='add' onClick ={()=>(onAdd(contador))}> Agregar al carrito </button>
        </div>
    )
}