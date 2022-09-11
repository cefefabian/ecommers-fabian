import React from 'react'
import ItemDetail from '../../Pages/ItemDetailContainer/ItemDetail'
const ItemListDetail = ({detalles}) => {
  return (
    <div>
         {
            detalles.map((Product)=>(
              <ItemDetail
              key={Product.id}
              resolucion={Product.resolucion}
              tamaño={Product.tamaño}
              smart={Product.smart}
              />
            ))
        }
    </div>
  )
}

export default ItemListDetail