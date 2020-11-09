import React, { Component } from "react";
import { Link } from "react-router-dom";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      datafilm: [],
      error: false,
      search: "",
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => {
        // console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Ambil data gagal");
        }
      })
      .then((data) => this.setState({ datafilm: data }));

    // .catch((error) => this.state({ error: error, loading: true }));
  }

  render() {
    return (
      // Mas Darius
      // <div className="jumbotron text-center" id="home">
      //   <div className="tampilan">
      //     <h1 className="display-4">Welcome FE-18 Movie</h1>
      //     <hr/>
      //     <h3>Kumpulan Film-film Anime Lengkap</h3>
      //     <br />
      //     <br />
      //     <h2>Siap Memulai Petualangan di dunia Fantasy?</h2>
      //     <br />
      //     <button type="button" class="btn btn-danger">CLICK TO START</button>
      //   </div>
      // </div>

      // Mas Andi
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <a className="nav-link" href="#">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div
          className="jumbotron text-center text-white"
          style={{ height: 350, backgroundColor: "rgb(40, 40, 40)" }}
        >
          <h1 className="lead">Selamat Datang Nama-Anda</h1>
          <p className="display-4">
            Film, acara TV tak terbatas, dan lebih banyak lagi
          </p>

          <Link className="btn btn-primary btn-lg" to="/" role="button">
            Upgrade Account
          </Link>
        </div>

        <div className="container">
          <div className="row mt-3 justify-content-center">
            <div className="col-8">
              <h1 className="text-center">Search Your Movie</h1>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Movie List.."
                  onChange={(event) =>
                    this.setState({ search: event.target.value })
                  }
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary"
                    type="button"
                    id="search-button"
                    onClick={this.componentDidMount}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          {this.state.datafilm.map((detail) => {
            // return console.log(detail);
            if (detail.title === this.state.search) {
              return <Link to="/detail">detail.title</Link>;
            }
          })}
        </div>
      </>
    );
  }
}

export default Homepage;
