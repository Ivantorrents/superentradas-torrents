import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { CartItem } from '../cartItem/CartItem';

export const CartContainer = () => {
  const {productCartList, clearProductCartList, getTotalPrice} = useContext(CartContext);
  console.log(productCartList)

  const sendOrder = (e)=>{
    e.preventDefault();
    const order = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value
      },
      items: productCartList,
      total: getTotalPrice()
  }
  console.log(e.target[0].value)
  }
  return (
    <div>
      <p>CartContainer</p>
      <div>
        {
          productCartList.length>0 ?
          <>
            {
              productCartList.map(item=>(
                <CartItem key={item.id} item={item}/>
              ))
            }
            <hr/>
            <button onClick={clearProductCartList}>Vaciar el carrito</button>
            <p> Precio total: {getTotalPrice()} </p>
            <form onSubmit={sendOrder} >
            <input type="text" placeholder='nombre'/>
            <input type="text" placeholder='telefono'/>
            <input type="email" placeholder='email'/>
            <button type='submit'>Enviar orden</button>
            </form>
          </>
          :
          <p>No has agregado productos</p>
        }
      </div>
    </div>
  )
}