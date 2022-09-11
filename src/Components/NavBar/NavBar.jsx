import './style.css'
import LogoCarrito from '../CartWidget/CartWidget'
import {NavLink} from 'react-router-dom'
const NavBar = () =>{
  return(
    <header className='header'>
        <div className='div-marca'>
          <NavLink to={'/'} style={{textDecoration: 'none'}}>
           <h1 className='marca'>logo</h1>
          </NavLink>
        </div>
        <div className='links'>
          <NavLink to={'/info'}
          className={({ isActive })=>(isActive ? "activo a": "inactivo a")}>
            Info
          </NavLink>
          <NavLink to={'/contacto'}
          className={({ isActive })=>(isActive ? "activo a": "inactivo a")}>
            Contacto
          </NavLink>
          <NavLink to={'/login'} className= 'login'>
            Login
          </NavLink>
          <NavLink to={'/carrito'} className='cariito'>
            
          </NavLink>
          {/* <a className="a" href='https://plataforma.coderhouse.com/cursos/34745/reactjs'>Info</a>
          <a className="a" href='https://plataforma.coderhouse.com/cursos/34745/reactjs'>Contacto</a>
          <a className="login" href='https://plataforma.coderhouse.com/cursos/34745/reactjs'>login</a>
          <a className="carrito"><LogoCarrito /></a> */}
        </div>
      </header>
    )
}

export default NavBar