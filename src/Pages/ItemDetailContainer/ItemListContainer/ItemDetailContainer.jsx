import React from 'react'
import ItemDetail from '../../../Components/Item/ItemDetail'
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore'


const ItemDetailContainer = () => {
    
    const {id} = useParams()
    console.log(id);

    const [detail, setdetail] = useState([])
    const [cargando, setCargando] = useState(true)
    console.log(detail);
    const db = getFirestore()
    useEffect(() => { 
          const queryDoc = doc(db, 'productos', id)
          getDoc(queryDoc)
          .then((res) => {
            setdetail( {id: res.id, ...res.data()} )
            setCargando(false)
          })
          
          .catch(err => console.log(err))
  
    
    }, [id])

  return (
    <div>
      {cargando ? <h2>Cargando...</h2> :
            <ItemDetail
            marca={detail.title}
            imagen={detail.image}
            description={detail.description}
            stock={detail.stock}
            category={detail.category}
            id={detail.id}
            precio={detail.price}
          />
      }
    </div>
  )
}

export default ItemDetailContainer