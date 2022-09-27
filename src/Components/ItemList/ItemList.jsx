
import React from 'react'
import Item from '../Item/Item';
import './style.css'
import {Link} from 'react-router-dom'

const List = ({lista}) => {
  return (
  <div className='main'>
    {
      lista.map((Product)=>(
        <Link key={Product.id}
        to={`/detail/${Product.id}`}
          style={{textDecoration: 'none'}}>
            <Item 
            marca={Product.title} 
            precio={Product.price} 
            imagen={Product.image}
            />
            </Link>
            ))
            
          }  
          
  </div>
  )
}

export default List