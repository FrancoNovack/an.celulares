import { NavLink } from "react-router-dom"

const NavbarBootstrapHTML = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to='/'>AN Celulares</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to='/'>Inicio</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to='/category/samsung'>Samsung</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to='/category/iphone'>Iphone</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to='/category/motorola'>Motorola </NavLink></li>
          </ul>
        </li>
       
      </ul>
   
    </div>
  </div>
</nav>
    )
}

export default NavbarBootstrapHTML