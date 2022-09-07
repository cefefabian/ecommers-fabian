import React, {useState} from 'react'
import './botn.css'
import sumar from './img/add.png'
import restar from './img/delete.png'

const Boton = ({ stock }) => {
    const [Contador, setContador] = useState(0)

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
    </div>
  )
}

export default Boton