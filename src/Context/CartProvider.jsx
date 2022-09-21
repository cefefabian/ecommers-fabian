import React, { children } from 'react'
import { useState } from 'react'
import { CartContext } from './cartContext'



const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (id,resolucion,smart,marca,tamaño,quantity) =>{
       if(isInCart(id)){
        alert('ya agregaste este producto al carrito')
       }else{
         setCart([...cart, {id,resolucion,smart,marca,tamaño,quantity}],)
       }
      };
      
      console.log(cart);
    const isInCart = (id) =>{
      return cart.some((producto) => producto.id === id)
    };

    const limpiarCarrito = () =>{
      setCart([])
    }

  return (
    <CartContext.Provider value={{cart, addToCart, limpiarCarrito}}>
        {children}
    </CartContext.Provider>
  );
}

export default CartProvider