
import List from "../../../Components/ItemList/ItemList";
import { useState,useEffect  } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

const ItemListContainer = () => {
  
  const[productos, setproductos] = useState([])
  console.log(productos);
  const [cargando, setCargando] = useState(true)
  const {categoryName} = useParams()

  const getProducts = () =>{
    const db = getFirestore()
    const queryBase = collection(db, 'productos')
    const querySnapshot = categoryName ? query(queryBase, where('category', '==', categoryName)) : queryBase

  
    getDocs(querySnapshot).then((resp) => {
      console.log(resp.id)
      const data = resp.docs.map((product) =>{
        return {id: product.id, ...product.data()}
      })
      setproductos(data)
      setCargando(false)
      console.log(data);
    })
  
}

  useEffect(() => {
    getProducts()
  }, [categoryName])



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