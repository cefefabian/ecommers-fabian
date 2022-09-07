
import getfech from "./Productos";
import List from "../ItemList/ItemList";
import { useState,useEffect  } from "react";



const ItemListContainer = () => {


  const[productos, setproductos] = useState([])

  useEffect(() => {
    getProduct
    .then((resp)=>setproductos(resp))
    .then(err=>console.log(err))
  }, [])

  const getProduct = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(getfech)
      }, 2000);
    })


  return (
    <>
      <List lista = {productos}/>
    </>
  )
}



export default ItemListContainer