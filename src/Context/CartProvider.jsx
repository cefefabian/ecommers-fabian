import { children } from 'react'
import { useState } from 'react'
import { CartContext } from './CartContext'



const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (id,imagen,description,precio,marca,stock,contador,category) =>{
       if(isInCart(id)){
        alert('ya agregaste este producto al carrito')
       }else{
         setCart([...cart, {id,imagen,description,precio,marca,stock,contador,category}])
       }
      };
      
    const isInCart = (id) =>{
      return cart.some((producto) => producto.id === id)
    };

    const limpiarCarrito = () =>{
      setCart([])
    }

    const eliminarProducto = (productId) =>{
      setCart(cart.filter((Item)=> Item.id !== productId))
    }
  return (
    <CartContext.Provider value={{cart,setCart, addToCart, limpiarCarrito, eliminarProducto}}>
        {children}
    </CartContext.Provider>
  );
}

export default CartProvider