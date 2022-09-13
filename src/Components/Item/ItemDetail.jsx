import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'

const ItemDetail = ({tamaño, resolucion, smart, imagen, marca}) => {
  const [stock, setstock] = useState(8)
  return (
    <div>
        <img className='imagen' src={imagen} alt={marca} />
        <p className='tamaño'>{tamaño}</p>
        <p className='resolucion'>{resolucion}</p>
        <p className='smart'>{smart}</p>

      <ItemCount stock={stock} inicial={1}/>

    </div>
  )
}

export default ItemDetail