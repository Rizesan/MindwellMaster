import "./home.css";
import { useNavigate } from "react-router-dom";
import {Latestvideos} from "../../components/latestvideos";

export const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="bg-dark text-secondary px-4 py-5 text-center" id="home">
                <div className="py-5">
                    <h1 className="display-5 fw-bold text-white">Mind Well</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-5 mb-4 text-white">
                            Quick1y design and customize responsive mobile-first sites with
                            Bootstrap, the world& most popular front-end open source toolkit, featuring Sass
                            variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                        </p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button
                                type="button"
                                className="btn btn-outline-primary btn-lg px-4 me-sm-3"
                                onClick={() => navigate('/form')}
                            >
                                Regístrate
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-light btn-lg px-4"
                                onClick={() => navigate('/about')}
                            >
                                Leer más
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Latestvideos/>
        </>
    );
};
