
import List from "../../../Components/ItemList/ItemList";
import { useState,useEffect  } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from '../../../productos/product.servise'



const ItemListContainer = () => {
  
  const[productos, setproductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const { marcaId } = useParams()
  
  
  useEffect(() => {
      console.log(marcaId);
      setCargando(true)

      getAllProducts(marcaId)
      .then((res)=>setproductos(res))
      .catch(err=>console.log(err))
      .finally(()=>{setCargando(false)})
    }, [marcaId])


  return (
    <div>
    
      {
      cargando ? <h2>cargando...</h2> :
        <List lista = {productos}/>
      }
      

    </div>
  )
};



export default ItemListContainer