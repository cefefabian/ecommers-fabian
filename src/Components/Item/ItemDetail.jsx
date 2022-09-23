import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import './styleDetail.css'
import { CartContext } from '../../Context/CartContext'
import Cart from '../Cart/Cart'


  const ItemDetail = ({tamaño, resolucion, precio, smart, imagen, marca,id}) => {
  const [hidden, setHidden] = useState(false)
  const [stock, setstock] = useState(8)
  const [Contador, setContador] = useState(1)

  const { addToCart, añadido} = useContext(CartContext)

  const onAdd = () => {
    setHidden(true)
    addToCart(id,imagen,resolucion,precio,smart,marca,tamaño,Contador)
  }

  return (
    <div className='div-padre'>
      <div className='detalles'>
        <img className='imagen' src={imagen} alt={marca} />
        <div className='detalles2'>
          <p className='tamaño'>{tamaño}</p>
          <p className='resolucion'>{resolucion}</p>
          <p className='smart'>{smart}</p>
        </div>
        <div className='compras'>
          
          {
            hidden ? (
            <div className='finalizar-compra-div'>
              <div>
              <Link to={'/Cart'} className='finalizar-compra'>
               Finalizar Comprar
              </Link>
              </div>
              <div className='seguir-comprando'>
                <Link to={'/'}>
                  Seguir comprando
                </Link>
              </div>
          </div>
            ):(
              <ItemCount 
              stock={stock} 
              Contador={Contador} 
              setContador={setContador}
              onAdd={onAdd}/>
            )
          }
          
        </div>
      </div>
    </div>
  )
}

export default ItemDetail