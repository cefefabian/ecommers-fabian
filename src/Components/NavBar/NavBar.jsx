import './style.css'
import LogoCarrito from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'


const NavBar = () =>{

  return(
    <header className='header'>
        <div className='div-marca'>
          <NavLink to={'/'} style={{textDecoration: 'none'}}>
           <h1 className='logo'>logo</h1>
          </NavLink>
        </div>
        <div className='links'>
          <NavLink to={'category/Sansung'}
          className={({ isActive })=>(isActive ? "activo a": "inactivo a")}>
            Sansung
          </NavLink>
          <NavLink to={'category/Sony'}
          className={({ isActive })=>(isActive ? "activo a": "inactivo a")}>
            Sony
          </NavLink>
          <NavLink to={'category/Hitachi'}
          className={({ isActive })=>(isActive ? "activo a": "inactivo a")}>
            Hitachi
          </NavLink>
          <NavLink to={'/cart'}>
            <LogoCarrito/>
          </NavLink>
        </div>
      </header>
    )
}

export default NavBar