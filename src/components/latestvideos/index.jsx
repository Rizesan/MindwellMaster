import React from 'react';
import './index.css'; // Asegúrate de tener este archivo para los estilos

export const Latestvideos = () => {
    const lineStyle = {
        borderTop: '3px solid #b0c4de',
        width: '100%',
        marginTop: '10px',
        marginBottom: '20px'
    };

    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <h1 className="text-center my-5">Podría interesarte</h1>
                <div style={lineStyle}></div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <img
                                src={"https://images.unsplash.com/photo-1584293002515-551ddc750ecb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text">
                                    De qué manera afectan las emociones en el día a día
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group my-3">
                                            <button type="button" className="btn btn-outline-primary">Leer más</button>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <img
                                src={"https://images.unsplash.com/photo-1584293002515-551ddc750ecb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text">
                                    De qué manera afectan las emociones en el día a día
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group my-3">
                                            <button type="button" className="btn btn-outline-primary">Leer más</button>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <img
                                src={"https://images.unsplash.com/photo-1584293002515-551ddc750ecb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text">
                                    De qué manera afectan las emociones en el día a día
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group my-3">
                                            <button type="button" className="btn btn-outline-primary">Leer más</button>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
