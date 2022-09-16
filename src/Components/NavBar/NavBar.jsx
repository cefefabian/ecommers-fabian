import './style.css'
import LogoCarrito from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
const NavBar = () =>{
  return(
    <header className='header'>
        <div className='div-marca'>
          <NavLink to={'/'} style={{textDecoration: 'none'}}>
           <h1 className='marca'>logo</h1>
          </NavLink>
        </div>
        <div className='links'>
          <NavLink to={'/marca/sansung'}
          className={({ isActive })=>(isActive ? "activo a": "inactivo a")}>
            sansung
          </NavLink>
          <NavLink to={'/marca/sony'}
          className={({ isActive })=>(isActive ? "activo a": "inactivo a")}>
            sony
          </NavLink>
          <NavLink to={'/login'} className= 'login'>
            Login
          </NavLink>
          <NavLink to={'/carrito'} className='cariito'>
          </NavLink>
        </div>
      </header>
    )
}

export default NavBar