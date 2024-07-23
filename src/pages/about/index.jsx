import React from 'react';
import './index.css';

export const AboutPage = () => {

    return (
        <div className="container-fluid px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5 mx-auto">
                <div className="col-lg-6">
                    <img
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="img-fluid rounded mx-auto d-block img-custom"
                    />
                </div>
                <div className="col-lg-6 text-center">
                    <h1 className="display-5 fw-bold lh-1 mb-3">¿Quiénes somos?</h1>
                    <p className="lead justify-content-lg-around">
                        Somos Mind Well, un equipo de estudiantes dedicados a proporcionar orientación y recursos prácticos para fortalecer la inteligencia emocional, creyendo firmemente que una mejor gestión emocional puede llevar a una vida más plena y satisfactoria.

                    </p>
                    <p className="lead justify-content-lg-around card-text">
                        En Mind Well, nuestro objetivo es ofrecer herramientas y apoyo accesibles a quienes enfrentan desafíos relacionados con la depresión y la ansiedad. Nos enfocamos en la educación y el desarrollo de habilidades emocionales para que nuestros usuarios puedan manejar mejor sus emociones, establecer relaciones más saludables y enfrentar los desafíos diarios con mayor resiliencia.

                    </p>
                </div>
            </div>
        </div>
    );
};

