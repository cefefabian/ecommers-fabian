
import getfech from "./Productos";
import List from "../../../Components/ItemList/ItemList";
import { useState,useEffect  } from "react";




const ItemListContainer = () => {


  const[productos, setproductos] = useState([])
  const [cargando, setcargando] = useState(true)


  useEffect(() => {
    getProduct
    .then((resp)=>setproductos(resp))
    .then(err=>console.log(err))
  }, [])

  const getProduct = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(getfech)
        setcargando(false)
      }, 2000);
    })


  return (
    <>
      {cargando && <h2>cargando...</h2>}
      <List lista = {productos}/>

    </>
  )
}



export default ItemListContainer