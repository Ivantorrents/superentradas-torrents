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
        <div>
            <p>Productos {contador}</p>
            <button onClick ={incrementar}> + </button>
            <button onClick ={decrementar}> - </button>
            <button onClick ={()=>(agregarProducto(contador))}> Agregar al carrito </button>
        </div>
    )
}

