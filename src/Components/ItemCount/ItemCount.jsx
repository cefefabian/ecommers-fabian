import React, {useState, useEffect} from 'react'
import './style.css'
import sumar from './img/add.png'
import restar from './img/delete.png'
import ItemDetailContainer from '../../Pages/ItemDetailContainer/ItemListContainer/ItemDetailContainer'


const ItemCount = ({ stock, onAdd , Contador, setContador}) => {

    

    const btnResta = () =>{
        if (Contador > 1) {    
            setContador(Contador - 1)
        }
    }

    const btnSuma = () =>{
        if (Contador < stock) { 
            setContador(Contador + 1)
        }
    }
    const agregarAlCarrito= () => {
        if (Contador > 0 && Contador <= stock) {
          onAdd();
        }
      }
  return (
    <div className='div-boton'>
        <div className='stock-disponible'>
           <h3>Stock disponible {stock}</h3> 
        </div>
        <div className='sumar-restar'>
            <img onClick={btnSuma} src={sumar} alt="" />
            <p>{Contador}</p>
            <img onClick={btnResta} src={restar} alt="" />
        </div>
        <div>
            <button onClick={agregarAlCarrito} className='comprar'>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount