import logo from './logo-carrito.png'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import './style.css'



const LogoCarrito = () => {
  const { cart } = useContext(CartContext)
  // const cartt = 'cart'
  const [claseCarrito, setcaseCarrito] = useState()
  useEffect(() => {
      {if (cart.length > 0) {
      setcaseCarrito({scale:'1.1', transition:'0.2s ease'})
      setTimeout(() => {
        setcaseCarrito({scale:'1', transition:'0.2s ease'})
      }, 500);
    }}
    }, [cart])
  
  
  return (
    <div>
      <div className='cart' style={claseCarrito}>
      <img src={logo} />
      <p className='cart-length'>{cart.length}</p>
      </div>
    </div>
    
  )
}

export default LogoCarrito