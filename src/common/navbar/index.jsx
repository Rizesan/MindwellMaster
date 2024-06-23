import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Logo from '../../assets/Logo.png';
import {Button} from "@mui/material";

export const Navbar = () => {
    const navigate = useNavigate();
    const {state}=useLocation();
    const onLogout=()=>{
        navigate('/login',{
            replace:true
        })
    }
    console.log(state)

    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="Logo" style={{ height: '40px' }} />
                    MindWell
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Servicios</Link>
                        </li>
                    </ul>

                    {state?.logged? (
                        <div className={"user"}>
                            <span className={"username"}>Bienvenido {state?.name}</span>
                            <button className={"btn-logout"} onClick={onLogout}>Cerrar sesión</button>
                        </div>
                    ): (
                        <form className="d-flex" role="search">
                            <button
                                className="btn btn-info"
                                type="submit"
                                onClick={() => navigate('/form')}

                            >Regístrate
                            </button>
                            <button
                                className="btn btn-success"
                                type="submit"
                                onClick={() => navigate('/login')}
                            >Iniciar Sesión
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </nav>
    );
}
