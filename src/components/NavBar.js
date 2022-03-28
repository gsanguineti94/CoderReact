import './navBar.css';  

function App(){
    return(
        <nav class="navbar">
        <div class="navbar-center">
          <span>
            <i class="fas fa-bars burger"></i>
            <ul class="nav-menu">
              <li class="productos-btn">Productos</li>
              <li class="negro-btn">El Negro</li>
              <li class="nosotros-btn">Nosotros</li>
              <li class="contacto-btn">Contacto</li>
            </ul>
          </span>
          <img src="fotos\NH.png" alt="Negro Holandes Casa de Pan" />
        </div>
      </nav>
    )
}

export default App;