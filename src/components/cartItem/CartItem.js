import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext';


export const CartItem = ({title, price, pictureUrl, quantity, totalPrice, id}) => {
    const {removeProduct} = useContext(CartContext);

    return (
        <div className='cart-item-container'>
            <div className='cart-img-container'>
                <img src={pictureUrl} alt={title}/>
            </div>
            <div className='cart-info-container'>
                <p>{title}</p>
                <p>precio unitario: {price}</p>
                <p>cantidad: {quantity}</p>
                <p>Precio total: {totalPrice}</p>
                <button onClick={()=>removeProduct(id)}>Eliminar producto</button>
            </div>
        </div>
    )
}