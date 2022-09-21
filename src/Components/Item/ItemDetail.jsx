import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import './styleDetail.css'
import { CartContext } from '../../Context/cartContext'


  const ItemDetail = ({tamaño, resolucion, smart, imagen, marca,id}) => {
  const [hidden, setHidden] = useState(false)
  const [stock, setstock] = useState(8)
  const [Contador, setContador] = useState(1)

  const { addToCart } = useContext(CartContext)

  const onAdd = () => {
    console.log(`Agregaste ${Contador} productos al carrito`);
    setHidden(true)
    addToCart(id,resolucion,smart,marca,tamaño,Contador)
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
              <Link to={'/car'} className='finalizar-compra'>
               Finalizar Comprar
              </Link>
              
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