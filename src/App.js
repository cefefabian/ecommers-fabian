// import logo from './logo.svg';
import './App.css';
import Boton from './Components/ItemListContainer/ItemCount';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import {useState} from 'react'


function App() {
  const [stock, setstock] = useState(8)
  
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting='Este es el main'/>
      <Boton stock={stock}/>
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
