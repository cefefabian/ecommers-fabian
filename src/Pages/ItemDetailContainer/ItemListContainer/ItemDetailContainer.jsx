import React from 'react'
import ItemListDetail from '../../../Components/ItemList/ItemListDetail'
import {useParams} from 'react-router-dom'
import getfech from './Productos'
import { useState, useEffect } from 'react'





const ItemDetailContainer = () => {
    
    const {id} = useParams()
    console.log(id);

    const [detail, setdetail] = useState([])
    const [cargando, setcargando] = useState(true)


    useEffect(() => {
        getProduct
        .then((resp)=> setdetail(resp))
    }, [])
    
    
    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(getfech.filter(producto => producto.id === id))
          console.log(getProduct);
          setcargando(false)
        }, 2000);
      })
      console.log(getProduct);
  return (
    <div>
      {cargando && <h2>Cargando...</h2>}
        <ItemListDetail detalles={detail}/>
    </div>
  )
}

export default ItemDetailContainer