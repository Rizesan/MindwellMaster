import "./home.css";
import { useNavigate } from "react-router-dom";
import {Latest} from "../../components/latestarticles";
import {Carousel} from "../../components/carousel";
import {Latestbooks} from "../../components/latestbooks";
import {LatesTest} from "../../components/latestest";

export const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="bg-dark text-secondary px-4 py-5 text-center" id="home">
                <div className="py-5">
                    <h1 className="display-5 fw-bold text-white">Mind Well</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-5 mb-4 text-white">
                            En un mundo cada vez más complejo y exigente, el desarrollo de la inteligencia emocional se ha convertido en una necesidad fundamental para el bienestar personal y profesional. Mind Well surge como respuesta a esta necesidad, ofreciendo una plataforma integral que proporciona apoyo y orientación a quienes buscan mejorar su inteligencia emocional y, con ello, su salud mental.
                        </p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button
                                type="button"
                                className="btn btn-outline-light btn-lg px-4 me-sm-3"
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
            <Latest/>
            <Latestbooks/>
            <LatesTest/>
        </>
    );
};
