import {useNavigate} from "react-router-dom";

export const ServicesPage = () => {
    const navigate = useNavigate();
  return (
      <div className="container px-4 py-5" id="featured-3">
          <h1 className="pb-2 border-bottom text-lg-center">Asociaciones</h1>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
              <div className="feature col">
                  <div
                      className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                      {/*
                       <svg className="bi" width="1em" height="1em">
                          <use xlink:href="#collection"></use>
                      </svg>
                      */}
                  </div>
                  <h3 className="fs-2 text-body-emphasis text-lg-center">Men's Healt</h3>
                  <p className={"card-text"}>Con un enfoque en mejorar la calidad de vida de los hombres, Men's Health ofrece artículos, consejos y programas diseñados para ayudar a sus lectores a alcanzar sus objetivos personales y profesionales, promoviendo un estilo de vida equilibrado y saludable.</p>
                  <button
                      type="button"
                      className="btn btn-outline-primary btn-lg px-4 me-sm-3 d-grid  d-sm-flex"
                      onClick={() => navigate('/form')}
                  >
                      Más información

                  </button>
              </div>
              {/*
                 <div className="feature col">
                  <div
                      className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                  </div>
                  <h3 className="fs-2 text-body-emphasis">Dr. Daniel</h3>
                  <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
                      sentence and probably just keep going until we run out of words.</p>
                  <button
                      type="button"
                      className="btn btn-outline-primary btn-lg px-4 me-sm-3 d-grid  d-sm-flex"
                      onClick={() => navigate('/form')}
                  >
                      Más información

                  </button>
              </div>*/}
          </div>
      </div>
  )
}