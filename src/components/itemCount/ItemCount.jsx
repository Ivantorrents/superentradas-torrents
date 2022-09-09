import React from 'react';
import { useState } from 'react';


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
        <div id='item-count' >
            <div className='count'>
            <p>Productos {contador}</p>
            <button onClick ={incrementar} disabled = {contador === stock} > + </button>
            <button onClick ={decrementar} disabled = {contador === initial} > - </button>
            </div>
            <button className='add' onClick ={()=>(agregarProducto(contador))}> Agregar al carrito </button>
        </div>
    )
}