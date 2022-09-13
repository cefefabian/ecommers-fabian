
import React from 'react'
import Item from '../Item/Item';
import './style.css'
import {Link} from 'react-router-dom'
import Prueba from '../Prueba';

const List = ({lista}) => {
  return (
      <div className='main'>
    {
      lista.map((Product)=>(
        <Link key={Product.id}
        to={`/detail/${Product.id}`}
          style={{textDecoration: 'none'}}>
            <Item 
            marca={Product.marca} 
            precio={Product.precio} 
            imagen={Product.imagen}
            />
            </Link>
            ))
            
          }  
          
    </div>
  )
}

export default List