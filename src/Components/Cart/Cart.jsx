import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import moment from 'moment'
import './style.css'
import Item from '../Item/Item'

const Cart = () => {
    const { cart, eliminarProducto } = useContext(CartContext)


    const createOrder= (und) =>{
        const db = getFirestore()
        const order = {
            buyer: {
                email:'tst@test.com',
                name:'cef',
                phone:2494261
            },
            items: cart,
            total: cart.reduce((valoranterior, valoractual)=> valoranterior + valoractual.precio * valoractual.contador, 0),
            date: moment().format(), 
        }
        const queryy = collection(db, 'orders');
        addDoc(queryy, order)
        .then(({id})=> console.log(id))
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
                    <h2>precio por unidad: {producto.precio}$</h2>
                    <button className='eliminar-producto' onClick={()=>eliminarProducto(producto.id)}>Eliminar producto del carrito</button>
                    </div>
                </div>
                
            ))
        }

           {
            cart.length !== 0 && (<div className='fin'>
                <h2  className='total'>precio total: {cart.reduce((valoranterior, valoractual)=> valoranterior + valoractual.precio * valoractual.contador, 0)}$</h2>
                <button className='order' onClick={createOrder}>order</button>
            </div>)
            }
    </div>
  )
}

export default Cart