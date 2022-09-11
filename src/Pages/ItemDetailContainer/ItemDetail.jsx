import React from 'react'

import ItemDetailContainer from './ItemListContainer/ItemDetailContainer'
import getfech from './ItemListContainer/Productos'
// ItemDetailContainer
// import Item from '../Item/Item'

const ItemDetail = ({tamaño, resolucion, smart}) => {
  return (
    <div>
        <p className='tamaño'>{tamaño}</p>
        <p className='resolucion'>{resolucion}</p>
        <p className='smart'>{smart}</p>
    </div>
  )
}

export default ItemDetail