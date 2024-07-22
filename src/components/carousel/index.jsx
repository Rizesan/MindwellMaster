
export const Carousel = () => {
  return (
      <div>
          <main>
              <div id="myCarousel" className="carousel slide mb-1" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className=""
                              aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"
                              className=""></button>
                      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"
                              className="active" aria-current="true"></button>
                  </div>
                  <div className="carousel-inner">
                      <div className="carousel-item">
                          <svg className="bd-placeholder-img"
                               width="100%" height="100%"
                               xmlns="http://www.w3.org/2000/svg"
                               aria-hidden="true"
                               preserveAspectRatio="xMidYMid slice"
                               focusable="false"
                          >
                              <rect width="100%"
                                    height="100%"
                                    fill="var(--bs-secondary-color)"
                              >kjk</rect>
                          </svg>
                          <div className="container">
                              <div className="carousel-caption text-start">
                                  <h1>che</h1>
                                  <p className="opacity-75">alska</p>
                                  <p><a className="btn btn-lg btn-primary" href="#">lalks</a></p>
                              </div>
                          </div>
                      </div>
                      <div className="carousel-item">
                          <svg className="bd-placeholder-img"
                               width="100%"
                               height="100%"
                               xmlns="http://www.w3.org/2000/svg"
                               aria-hidden="true"
                               preserveAspectRatio="xMidYMid slice"
                               focusable="false">
                              <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                          </svg>
                          <div className="container">
                              <div className="carousel-caption">
                                  <h1>titulo</h1>
                                  <p>parrafo</p>
                                  <p><a className="btn btn-lg btn-primary" href="#">parrafo</a></p>
                              </div>
                          </div>
                      </div>
                      <div className="carousel-item active">
                          <svg className="bd-placeholder-img"
                               width="100%" height="100%"
                               xmlns="http://www.w3.org/2000/svg"
                               aria-hidden="true"
                               preserveAspectRatio="xMidYMid slice"
                               focusable="false">
                              <rect width="100%"
                                    height="100%"
                                    fill="var(--bs-secondary-color)"
                              >aalsk</rect>
                          </svg>
                          <div className="container">
                              <div className="carousel-caption text-end">
                                  <h1>titulo</h1>
                                  <p>parrafo</p>
                                  <p><a className="btn btn-lg btn-primary" href="#"></a></p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <button className="carousel-control-prev"
                          type="button"
                          data-bs-target="#myCarousel"
                          data-bs-slide="prev">
                      <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">span</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#myCarousel"
                          data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">span</span>
                  </button>
              </div>


              {/*<!-- Marketing messaging and featurettes
              ================================================== -->
              <!-- Wrap the rest of the page in another container to center all the content. -->*/}

                  {/*                  <!-- START THE FEATURETTES --> */}


          </main>
      </div>
  )
}