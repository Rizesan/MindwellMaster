export const Carousel = () => {
    return (
        <div>
            <main>
                <div id="myCarousel" className="carousel slide mb-1" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                            </svg>
                            <div className="container">
                                <div className="carousel-caption text-start">
                                    <h1>First slide label</h1>
                                    <p>Some representative placeholder content for the first slide.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                            </svg>
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Second slide label</h1>
                                    <p>Some representative placeholder content for the second slide.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                            </svg>
                            <div className="container">
                                <div className="carousel-caption text-end">
                                    <h1>Third slide label</h1>
                                    <p>Some representative placeholder content for the third slide.</p>
                                    <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </main>
        </div>
    );
};
