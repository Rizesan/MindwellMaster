import './footer.css'

export const Footer = () => {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
                    <li className="nav-item"><a href="/about" className="nav-link px-2 text-body-secondary">Nosotros</a></li>
                    <li className="nav-item"><a href="/services" className="nav-link px-2 text-body-secondary">Servicios</a></li>
                    <li className="nav-item"><a href="/tools" className="nav-link px-2 text-body-secondary">Herramientas</a></li>
                </ul>
                <p className="text-center text-body-secondary">© 2024 Mind Well. Todos los Derechos Reservados</p>
                <div className="d-flex justify-content-center align-items-center my-3">
                    <a href="https://www.facebook.com/" className="mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                        </svg>
                    </a>
                    <a href="https://www.twitter.com/" className="mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.83.656-2.828.775 1.017-.611 1.798-1.574 2.165-2.724-.951.563-2.005.973-3.127 1.194-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.924 2.207-4.924 4.924 0 .386.043.761.127 1.124-4.094-.205-7.725-2.166-10.158-5.144-.424.725-.666 1.561-.666 2.456 0 1.694.863 3.187 2.174 4.065-.802-.025-1.555-.246-2.215-.616v.062c0 2.366 1.683 4.342 3.918 4.789-.41.111-.842.171-1.287.171-.315 0-.622-.031-.921-.087.623 1.946 2.429 3.364 4.57 3.404-1.675 1.312-3.786 2.095-6.078 2.095-.395 0-.786-.023-1.17-.069 2.168 1.391 4.742 2.205 7.514 2.205 9.017 0 13.955-7.474 13.955-13.955 0-.213-.005-.426-.014-.637.959-.693 1.8-1.56 2.462-2.548l-.047-.02z"/>
                        </svg>
                    </a>
                </div>
            </footer>
        </div>
    );
};
