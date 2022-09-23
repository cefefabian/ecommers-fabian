import { children } from 'react'
import { useState } from 'react'
import { CartContext } from './CartContext'



const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (id,imagen,resolucion,precio,smart,marca,tamaño,quantity) =>{
       if(isInCart(id)){
        alert('ya agregaste este producto al carrito')
       }else{
         setCart([...cart, {id,imagen,resolucion,precio,smart,marca,tamaño,quantity}],)
       }
      };
      
    const isInCart = (id) =>{
      return cart.some((producto) => producto.id === id)
    };

    const limpiarCarrito = () =>{
      setCart([])
    }

    const eliminarProducto = (productId) =>{
      let eliminarProductoArray = []
      cart.forEach((product)=>{
        if (product.id !== productId) {
          eliminarProductoArray.push(product)
          
        }
      })
      setCart(eliminarProductoArray)
    }

  return (
    <CartContext.Provider value={{cart, addToCart, limpiarCarrito, eliminarProducto}}>
        {children}
    </CartContext.Provider>
  );
}

export default CartProvider