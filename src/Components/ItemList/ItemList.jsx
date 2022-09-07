
import React from 'react'
import Item from '../Item/Item';
import './style.css'

const List = ({lista}) => {
  return (
      <div className='main'>
    {
        lista.map((Product)=>(
            <Item 
            key={Product.id}
            marca={Product.marca} 
            precio={Product.precio} 
            resolucion={Product.resolucion}
            tamaño={Product.tamaño}
            smart={Product.smart}
            imagen={Product.imagen}
            />
        ))
    }  
    </div>
  )
}

export default List