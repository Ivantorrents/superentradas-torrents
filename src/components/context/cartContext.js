import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([]);

    const isInCart = (id)=>{
        const elementExists = productCartList.some((elemento)=>elemento.id === id);
        return elementExists;
    }

    const agregarProducto = (product, qty)=>{
        const newProduct={...product, quantity:qty}
        const newList = [...productCartList];
        newList.push(newProduct)
        setProductCartList(newList)
        
        if(isInCart(product.id)){
            const productIndex = productCartList.findIndex(element=>element.id===product.id);
            newList[productIndex].quantity = newList[productIndex].quantity + qty;
            newList[productIndex].totalPrice = newList[productIndex].quantity * newList[productIndex].price;
            setProductCartList(newList)
        } else{
       
            const newProduct={...product, quantity:qty, totalPrice: qty*product.price}
            
            const newList = [...productCartList];
            newList.push(newProduct);
            setProductCartList(newList);
        }
    }

    const removeProduct = (productId)=>{
        const copyArray = [...productCartList];
        const newArray = copyArray.filter(elm=>elm.id !== productId);
        setProductCartList(newArray);
    }

    const clearProductCartList=()=>{
        setProductCartList([])
    }

    const getTotalProducts = ()=>{
        const totalProducts = productCartList.reduce((acc,product)=>acc + product.quantity,0);
        return totalProducts;
    }

    const getTotalPrice = ()=>{
        const totalPriceProducts = productCartList.reduce((acc, product)=> acc + product.totalPrice,0)
        return totalPriceProducts
    }

    return(
        <CartContext.Provider value={{productCartList,agregarProducto, removeProduct, clearProductCartList, isInCart, getTotalProducts, getTotalPrice}}>
            {children}
        </CartContext.Provider>
    )
}