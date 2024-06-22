import React from "react";
import {Link} from "react-router-dom";

export const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
              <Link className="navbar-brand" to="/">Cheese</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/about">Nosotros</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/service">Servicios</Link>
                      </li>
                  </ul>
                  <form className="d-flex" role="search">
                      <button className="btn btn-info" type="submit">Regístrate</button>
                      <button className="btn btn-success" type="submit">Iniciar Sesión</button>
                  </form>
              </div>
          </div>
      </nav>
)
}