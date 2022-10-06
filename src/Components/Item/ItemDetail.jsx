import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import './styleDetail.css'
import { CartContext } from '../../Context/CartContext'

  const ItemDetail = ({stock, description, precio, imagen, marca, id, category}) => {
  const [hidden, setHidden] = useState(false)
  const [stocki, setstock] = useState(stock)
  const [Contador, setContador] = useState(1)

  const { addToCart } = useContext(CartContext)

  console.log(id);
  
  const onAdd = () => {
    setHidden(true)
    addToCart(id,imagen,description,precio,marca,stock,Contador,category)
  }
  const rutaImg = '../img/'
  return (
    <div className='div-padre'>
      <div className='detalles'>
        <img className='imagen' src={rutaImg + imagen} alt={marca} />
        <div className='detalles2'>
          <p className='tamaño'>{marca}</p>
          <p className='resolucion'>{description}</p>
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
              stock={stocki} 
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