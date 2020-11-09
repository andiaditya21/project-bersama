import React, { Component } from "react";

class DetailFilm extends Component {
  state = {
    film: null,
    loading: true,
  };

  componentDidMount() {
    const id = this.props.match.params.id_film;
    fetch("https://ghibliapi.herokuapp.com/films/" + id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Ambil data gagal");
        }
      })
      .then((data) =>
        this.setState({
          film: data,
          loading: false,
        })
      );
  }

  render() {
    const { loading, film } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }
    // console.log(this.props)
    return (
      <div className="container">
        <h1 className='text-center'>Detail FIlm</h1>
        <div className="card container">
          <h2>{film.title}</h2>
          <p>{film.description}</p>
          <p>Release : {film.release_date}</p>
          <p>Score: {film.rt_score}</p>
        </div>
        {/* {this.props.match.params.id_film} */}
      </div>
    );
  }
}

export default DetailFilm;
