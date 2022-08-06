import React from 'react'
import CartWidget from '../cartwidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand" href="#">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link to={"/categoria/papas"} className="dropdown-item" >Papas</Link></li>
                <li><Link to={"/categoria/completo"}className="dropdown-item">Completos</Link></li>
                <li><Link to={"/categoria/hamburguesa"} className="dropdown-item">Hamburguesas</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link to={"/categoria/nuggets"} className="dropdown-item">Nuggets</Link></li>
                <li><Link to={"/categoria/pizza"} className="dropdown-item">Pizza</Link></li>
                <li><Link to={"/categoria/sándwich"} className="dropdown-item">Sándwich</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <CartWidget/>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
      
    </nav>
    
  )
}
export default NavBar
