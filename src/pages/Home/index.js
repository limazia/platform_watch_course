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
                      src="https://www.youtube.com/embed/MXzGot5bcYw"
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
                      <small>Aula 01 - 30/05 às 19h</small>
                      <p className="inactive">O começo de tudo</p>
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
                      <small>Aula 02 - 31/05 às 19h</small>
                      <p>Algumas abstrações</p>
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
                      <small className="soon">Aula 03 - 01/06 às 19h</small>
                      <p className="soon">O coração do projeto</p>
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
                      <small className="soon">Aula 04 - 02/06 às 19h</small>
                      <p className="soon">Tudo funcionando</p>
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
                      <small className="soon">Aula 05 - 03/06 às 19h</small>
                      <p className="soon">Mostre ao mundo!</p>
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
