
import './App.css';
import ItemCount from './Components/ItemCount/ItemCount';
import ItemListContainer from './Pages/ItemDetailContainer/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import {useState, useEffect} from 'react'
// import { BrowserRouter, Routes, Route} from react-router-dom
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemListContainer/ItemDetailContainer';


function App() {
  const [stock, setstock] = useState(8)

  return (

    

    <div>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/detail/:id' element={<ItemDetailContainer/>}></Route>
          </Routes>
      </BrowserRouter>

      <ItemCount stock={stock} inicial={1}/>



    </div>
   
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
