import React from 'react'
import ItemDetail from '../../../Components/Item/ItemDetail'
import {useParams} from 'react-router-dom'
import { getProductById } from '../../../productos/product.servise'
import { useState, useEffect } from 'react'


const ItemDetailContainer = () => {
    
    const {id} = useParams()
    console.log(id);

    const [detail, setdetail] = useState({})
    const [cargando, setCargando] = useState(true)


    useEffect(() => {
          getProductById(id)
          .then((resp) => setdetail(resp))
          .finally(() => {
            setCargando(false);
          })
    
    }, [id])

  return (
    <div>
      {cargando ? <h2>Cargando...</h2> :
            <ItemDetail
            imagen={detail.imagen}
            resolucion={detail.resolucion}
            tamaño={detail.tamaño}
            smart={detail.smart}
          />
      }
    </div>
  )
}

export default ItemDetailContainer