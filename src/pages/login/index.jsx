import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state, setState] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { email, password };

        console.log('Datos a enviar:', data); // Verificar que los datos están siendo recopilados

        axios.post('https://mindwellapi-1.onrender.com/api/v1/auth/login', data)
            .then((response) => {
                console.log('response', response);
                setState({
                    type: "success",
                    message: "Inicio de sesión exitoso"
                });
                navigate('/dashboard');
            })
            .catch((error) => {
                console.log('Error', error);
                setState({
                    type: "danger",
                    message: "Error en el inicio de sesión"
                });
            });
    };

    return (
        <div className={"login-background"}>
            <main className="form-signin w-100 m-auto">
                <div >
                    <form onSubmit={handleSubmit}>
                        {state && (
                            <div className={`alert alert-${state.type}`} role="alert">
                                {state.message}
                            </div>
                        )}
                        <h1 className="h3 mb-3 fw-normal">Inicia Sesión</h1>

                        <div className="form-floating">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoComplete="off"
                            />
                            <label htmlFor="floatingInput">Correo</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete="off"
                            />
                            <label htmlFor="floatingPassword">Contraseña</label>
                        </div>

                        <div className="form-check text-start my-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value="remember-me"
                                id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Recuérdame
                            </label>
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit">Entra</button>
                    </form>
                </div>
            </main>
        </div>
    );
};


{/*
    <div>
        <main className="form-signin w-100 m-auto">
          <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-check text-start my-3">
              <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
          </form>
        </main>
      </div>
*/
}