import React, { Children } from 'react'
import { useState } from 'react'
import { CartContext } from './cartContext'

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, quantity) =>{
      if (dentroCarrito(item.id)) {
        alert('ya esta en el carrito')
      }else{
        setCart([...cart, {item, quantity}],)
      }
    };

    const dentroCarrito = (id) =>{
      return cart.some((item) => item.id === id)
    };

  return (
    <CartContext.Provider value={{cart, addToCart}}>
        {children}
    </CartContext.Provider>
  );
}

export default CartProvider