
import List from "../../../Components/ItemList/ItemList";
import { useState,useEffect  } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from '../../../productos/product.servise'
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

const ItemListContainer = () => {
  
  const[productos, setproductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const {categoryName} = useParams()

  const getProducts = () =>{
    const db = getFirestore()
    const querySnapshot = collection(db, 'productos')
    if (categoryName) {
      const queryFilter = query(
        querySnapshot, where('category', '==', categoryName)
      )
      getDocs(queryFilter).then((resp) => {
    console.log(resp.id)
    const data = resp.docs.map((product) =>{
      return {id: product.id, ...product.data()}
    })
    setproductos(data)
    setCargando(false)
    console.log(data);
  })
}else{
  
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
}
  // const getProducts = () =>{
  //   const db = getFirestore()
  //   const querySnapshot = collection(db, 'productos')
  //   const queryFilter = query(
  //     querySnapshot, where('category', '==', categoryName)
  //   )
  //   getDocs(querySnapshot).then((resp) => {
  //     console.log(resp.id)
  //     const data = resp.docs.map((product) =>{
  //       return {id: product.id, ...product.data()}
  //     })
  //     setproductos(data)
  //     setCargando(false)
  //     console.log(data);
  //   })
  // }
  useEffect(() => {
    getProducts()
  }, [categoryName])
  
  // useEffect(() => {
  //     console.log(marcaId);
  //     setCargando(true)

  //     getAllProducts(marcaId)
  //     .then((res)=>setproductos(res))
  //     .catch(err=>console.log(err))
  //     .finally(()=>{setCargando(false)})
  //   }, [marcaId])


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