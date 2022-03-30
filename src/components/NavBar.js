import logo from './fotos/NH.png'
import './navBar.css';

function App() {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <span>
          <i className="fas fa-bars burger"></i>
          <ul className="nav-menu">
            <li className="productos-btn">Productos</li>
            <li className="negro-btn">El Negro</li>
            <li className="nosotros-btn">Nosotros</li>
            <li className="contacto-btn">Contacto</li>
          </ul>
        </span>
        <img src={logo} alt="Negro Holandes Casa de Pan" />
      </div>
    </nav>
  )
}

export default App;