import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Cart = () => {
    const { cart, addToCart, limpiarCarrito, eliminarProducto } = useContext(CartContext)
    const [totalCarrito, settotalCarrito] = useState()
    const [clase, setclase] = useState()
    
    {
        useEffect(() => {
        const totalDelCarrito = Object.values(cart).map((total)=> total.precio * total.contador)
            let total = 0
        for (let i = 0; i < totalDelCarrito.length; i++) {
            total += totalDelCarrito[i]
        }
           settotalCarrito(total)
    
    }, [cart])
    

}

{
}

    const rutaImg = '../img/'
  return (
    <div className={(cart.length == 1) ? 'producto carrito' : 'carrito'}>
        {cart.length === 0 ? (  <div className='no-hay-producto'><h2>no hay productos en tu carrito</h2>
                                <Link to={'/'}>Volver a comprar</Link></div>) :
        
            cart.map((producto)=>(
                <div key={producto.id} className='div-carrito'>
                    <div className='div-carrito-interno'>
                    <img src={rutaImg + producto.imagen} alt={producto.marca} />
                    <h2>Cantidad: {producto.contador}</h2>
                    <h2>marca: {producto.marca}</h2>
                    <h2>precio por unidad: {producto.precio}</h2>
                    <button className='eliminar-producto' onClick={()=>eliminarProducto(producto.id)}>Eliminar producto del carrito</button>
                    </div>
                </div>
                
            ))
        }
           {
            cart.length !== 0 && (<div>
                <h2  className='total'>precio total: {totalCarrito}</h2>
            </div>)
            }
    </div>
  )
}

export default Cart