import axios from 'axios'; // Importar Axios
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import { useState } from "react";

export const UpdateProfile = ({ id }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [bio, setBio] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");
    const [state, setState] = useState(null);
    const navigate = useNavigate(); // Inicializar useNavigate

    const handleSubmit = (event) => {
        const data = {
            firstName,
            lastName,
            bio,
            avatarUrl
        };
        const dataUser = JSON.parse(localStorage.getItem(`${id}`))
        console.log(dataUser)
        console.log(id)

        event.preventDefault();
        axios.patch(`https://mindwellapi-1.onrender.com/api/v1/profile/${id}`, data)
            .then((response) => {
                console.log('response', response);
                setState({
                    type: "success",
                    message: "Perfil actualizado correctamente"
                });
                navigate('/profile');
            })
            .catch((error) => {
                console.log('Error', error);
                setState({
                    type: "danger",
                    message: "Perfil no actualizado"
                });
            });
    };

    return (
        <div className="form-background">
            <main className="form-signin">
                <form onSubmit={handleSubmit}>
                    {
                        state && (
                            <div className={`alert alert-${state.type}`} role="alert">
                                {state.message}
                            </div>
                        )
                    }
                    <h1 className="h3 mb-3 fw-normal text-center">Actualizar Perfil</h1>
                    <div className="form-floating mb-4">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingFirstName"
                            name="firstName"
                            placeholder="John"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            autoComplete="off"
                        />
                        <label htmlFor="floatingFirstName">Nombre</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingLastName"
                            name="lastName"
                            placeholder="Doe"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            autoComplete="off"
                        />
                        <label htmlFor="floatingLastName">Apellido</label>
                    </div>
                    <div className="form-floating mb-4">
                        <textarea
                            className="form-control"
                            id="floatingBio"
                            name="bio"
                            placeholder="Biografía del usuario..."
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            required
                            autoComplete="off"
                            rows="4"
                        />
                        <label htmlFor="floatingBio">Biografía</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input
                            type="url"
                            className="form-control"
                            id="floatingAvatarUrl"
                            name="avatarUrl"
                            placeholder="https://example.com/avatar.jpg"
                            value={avatarUrl}
                            onChange={(e) => setAvatarUrl(e.target.value)}

                            autoComplete="off"
                        />
                        <label htmlFor="floatingAvatarUrl">URL del Avatar</label>
                    </div>

                    <button className="btn btn-primary w-100 py-2" type="submit">Actualizar Perfil</button>
                </form>
            </main>
        </div>
    );
};
