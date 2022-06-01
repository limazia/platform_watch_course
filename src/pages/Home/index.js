import { Head, Navbar } from "~/components";

function Home() {
  return (
    <>
      <Head title="Sua plataforma de curso" />
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <div className="card card-video">
                  <div className="card-body">
                    <iframe
                      className="w-100"
                      src="https://www.youtube.com/embed/0dCrA5_KZDA"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-3">
                <button className="btn btn-discord">
                  <i className="fab fa-discord mr-2"></i> Conversar no Discord
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <div className="card card-list-classes">
                  <div className="card-body">
                    <div className="info">
                      <small>Aula 01 - 00/00 às 19h</small>
                      <p className="inactive">Título da aula!</p>
                    </div>
                    <div className="icon">
                      <i className="fas fa-play-circle play"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <div className="card card-list-classes">
                  <div className="card-body">
                    <div className="info">
                      <small>Aula 02 - 00/00 às 19h</small>
                      <p>Título da aula!</p>
                    </div>
                    <div className="icon">
                      <i className="fas fa-signal-stream active"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <div className="card card-list-classes">
                  <div className="card-body">
                    <div className="info">
                      <span className="badge badge-soon">Em breve</span>
                      <small className="soon">Aula 03 - 00/00 às 19h</small>
                      <p className="soon">Título da aula!</p>
                    </div>
                    <div className="icon">
                      <i className="fas fa-clock soon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <div className="card card-list-classes">
                  <div className="card-body">
                    <div className="info">
                      <span className="badge badge-soon">Em breve</span>
                      <small className="soon">Aula 04 - 00/00 às 19h</small>
                      <p className="soon">Título da aula!</p>
                    </div>
                    <div className="icon">
                      <i className="fas fa-clock soon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <div className="card card-list-classes">
                  <div className="card-body">
                    <div className="info">
                      <span className="badge badge-soon">Em breve</span>
                      <small className="soon">Aula 05 - 00/00 às 19h</small>
                      <p className="soon">Título da aula!</p>
                    </div>
                    <div className="icon">
                      <i className="fas fa-clock soon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
