import axios from 'axios'; // Importar Axios
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import './index.css';
import { useState } from "react";

export const FormPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [state, setState] = useState(null)
    const navigate = useNavigate(); // Inicializar useNavigate

    const handleSubmit = (event) =>{

        const  data = {
            email,
            password
        }
        console.log(data)

        event.preventDefault()
        axios.post('https://mindwellapi-1.onrender.com/api/v1/users', data)
            .then((response)=>{
                console.log('response', response)
                setState({
                    type:"success",
                    message:"Usuario creado correctamente"
                })
                navigate('/update-profile');
            })
            .catch((error) => {
                console.log('Error', error)
                setState({
                    type:"danger",
                    message:"Usuario no resgistrado"
                })
            })
    }

    return (
        <div className="form-background">
            <main className="form-signin">
                <form onSubmit={handleSubmit}>
                    {
                        state &&(
                            <div className={`alert alert-${state.type}`} role="alert">
                                {state.message}
                            </div>
                        )
                    }
                    <h1 className="h3 mb-3 fw-normal text-center">Registro</h1>
                    <div className="form-floating mb-4">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingEmail"
                            name="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="off"
                        />
                        <label htmlFor="floatingEmail">Correo</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            name="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="off"
                        />
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </div>

                    <button className="btn btn-primary w-100 py-2" type="submit">Regístrate</button>
                </form>
            </main>
        </div>
    );
};