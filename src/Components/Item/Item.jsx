import React from 'react'
import './style.css'


const Item = ({marca, precio, tamaño, resolucion, smart, imagen, id}) => {
  const rutaImg = '../img/'
    return (
        <>
        <section>
        <img src={rutaImg + imagen} alt={marca}/>
        <div className='div'>
        <p className='marca'>{marca}</p>
        <p className='precio'>{precio}$</p>
        <p className='tamaño'>{tamaño}</p>
        <p className='resolucion'>{resolucion}</p>
        <p className='smart'>{smart}</p>
        </div>
        </section>
    
    </>
  )
}

export default Item