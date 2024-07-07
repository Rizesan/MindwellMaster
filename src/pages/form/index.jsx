import { useForm } from "../../hooks/useForm";
import './index.css';

export const FormPage = () => {
    const { name, email, password, confirmPassword, onInputChange, onResetForm } = useForm({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const onRegister = (e) => {
        e.preventDefault();

        // Validación adicional si es necesario
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Procesar el registro aquí
        console.log({ name, email, password });

        onResetForm();
    };

    return (
        <div className="form-background">
            <main className="form-signin">
                <form onSubmit={onRegister}>
                    <h1 className="h3 mb-3 fw-normal text-center">Registro</h1>

                    <div className="form-floating mb-4">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingName"
                            name="name"
                            placeholder="Nombre"
                            value={name}
                            onChange={onInputChange}
                            required
                            autoComplete="off"
                        />
                        <label htmlFor="floatingName">Nombre</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingEmail"
                            name="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={onInputChange}
                            required
                            autoComplete="off"
                        />
                        <label htmlFor="floatingEmail">Email address</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={onInputChange}
                            required
                            autoComplete="off"
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingConfirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={onInputChange}
                            required
                            autoComplete="off"
                        />
                        <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                    </div>

                    <button className="btn btn-primary w-100 py-2" type="submit">Register</button>
                </form>
            </main>
        </div>
    );
};
