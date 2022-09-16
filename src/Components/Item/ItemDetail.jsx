import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './styleDetail.css'

const ItemDetail = ({tamaño, resolucion, smart, imagen, marca}) => {
  const [stock, setstock] = useState(8)
  const [Contador, setContador] = useState(1)

  const onAdd= (cantidad) => {
    console.log(`Agregaste ${cantidad} productos al carrito`);
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
          <ItemCount 
          stock={stock} 
          Contador={Contador} 
          setContador={setContador}
          onAdd={onAdd}/>
          <div className='finalizar-compra-div'>
          <Link to={'/car'} className='finalizar-compra'>
           Finalizar Comprar
          </Link>

          </div>
        </div>
      </div>


    </div>
  )
}

export default ItemDetail