import React, {useState, useEffect} from 'react'
import './style.css'
import sumar from './img/add.png'
import restar from './img/delete.png'

const ItemCount = ({ stock }) => {
    const [Contador, setContador] = useState(1)

    useEffect(() => {
      
    }, [])
    

    const btnResta = () =>{
        if (Contador > 0) {    
            setContador(Contador - 1)
        }
    }

    const btnSuma = () =>{
        if (Contador < stock) { 
            setContador(Contador + 1)
        }
    }
    const onAdd = ()=>{
        console.log( `${Contador} producto añadido`);
    }
  return (
    <div className='div-padre'>
        <div className='stock-disponible'>
           <h3>Stock disponible {stock}</h3> 
        </div>
        <div className='sumar-restar'>
            <img onClick={btnSuma} src={sumar} alt="" />
            <p>{Contador}</p>
            <img onClick={btnResta} src={restar} alt="" />
        </div>
        <div>
            <button onClick={onAdd} className='comprar'>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount