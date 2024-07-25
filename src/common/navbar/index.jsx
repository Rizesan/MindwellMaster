import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/Logo.png';
import { Button } from "@mui/material";
import './index.css';

export const Navbar = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem("user");

    const onLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("userId");
        navigate('/login', { replace: true });
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="Logo" style={{ height: '40px' }} />
                    Mind Well
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
                        <li className="nav-item">
                            <Link className="nav-link" to="/tools">Herramientas</Link>
                        </li>
                        {user? (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile-edit">Perfil</Link>
                                </li>
                            ) : (<></>)
                        }

                    </ul>
                    {user ? (
                        <div className="user">
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={onLogout}
                            >
                                Cerrar sesión
                            </Button>
                        </div>
                    ) : (
                        <form className="d-flex" role="search">
                            <Button
                                variant="contained"
                                color="success"
                                onClick={() => navigate('/form')}
                            >
                                Regístrate
                            </Button>
                            <Button
                                variant="contained"
                                color="success"
                                onClick={() => navigate('/login')}
                                style={{ marginLeft: '0.5rem' }}
                            >
                                Iniciar Sesión
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </nav>
    );
}
