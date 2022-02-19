import React from "react";
import { Link } from "react-router-dom";


const Navegacion = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav container">
            <Link className="nav-link active" aria-current="page" to="/Vehiculos">
                Vehiculos
            </Link>
            <Link className="nav-link active" aria-current="page" to="/Infracciones">
                Infracciones
            </Link>
            <Link className="nav-link active" aria-current="page" to="/Propietarios">
                Propietarios
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navegacion;
