import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, addToCart, limpiarCarrito, eliminarProducto } = useContext(CartContext)


  return (
    <div>
        {cart.length === 0 ? (  <><h2>no hay productos en tu carrito</h2>
                                <Link to={'/'}>Volver a comprar</Link></>) :
        
            cart.map((producto)=>(
                <div key={producto.id}>
                    <img src={producto.imagen} alt={producto.marca} />
                    <h2>Cantidad: {producto.quantity}</h2>
                    <h2>marca: {producto.marca}</h2>
                    <h2>precio por unidad: {producto.precio}</h2>
                    <button onClick={()=>eliminarProducto(producto.id)}>Eliminar producto del carrito</button>
                </div>
                
            ))
        }
           {
            cart.length !== 0 && (<div>
                <h2>precio total: {cart[0].precio * cart[0].quantity}</h2>
            </div>)
            }
    </div>
  )
}

export default Cart