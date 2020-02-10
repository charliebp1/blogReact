import React, { Component } from "react";
import Pelicula from "./Pelicula";
import Sidebar from "./Sidebar";
import Slider from "./Slider";

class Peliculas extends Component {
  state = {};

  cambiarTitulo = () => {
    var { peliculas } = this.state;
    //var random = Math.floor(Math.random() * 3);

    peliculas[0].titulo = "Batman and Superman Superfriends";

    this.setState({
      peliculas: peliculas
    });
  };

  favorita = (pelicula, indice) => {
    console.log("Favorita marcada");
    console.log(pelicula, indice);
    this.setState({
      favorita: pelicula
    });
  };

  componentWillMount() {
    // alert("Se va a montar el componente");
    this.setState({
      peliculas: [
        {
          titulo: "Batman vs Superman",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmIBSg1AuSo-MfT_pgvDMdtJASsrfIqDfH2hc4_RUUzNXBp-js&s"
        },
        {
          titulo: "Gran Torino",
          image:
            "http://diariobasta.com/wp-content/uploads/2019/08/grantorino-708x350@2x.jpg"
        },
        {
          titulo: "Looper",
          image:
            "https://img.cinemablend.com/filter:scale/quill/e/2/2/7/6/2/e22762888d59d124752a7f9033d647ff688a8fc2.jpg?fw=1200"
        }
      ],
      nombre: "Carlos Britos",
      favorita: {}
    });
  }

  componentDidMount() {
    // console.log("YA SE HA MONTADO EL COMPONENTE!!");
  }

  componentWillUnmount() {
    // alert("Me voy a desmontar");
  }

  render() {
    var pStyle = {
      background: "green",
      color: "white",
      padding: "10px"
    };

    var favorita;
    if (this.state.favorita.titulo) {
      favorita = (
        <p className="favorita" style={pStyle}>
          <strong>La pelicula favorita es: </strong>
          <span>{this.state.favorita.titulo}</span>
        </p>
      );
    } else {
      favorita = <p>NO HAY PELICULA FAVORITA</p>;
    }

    return (
      <React.Fragment>
        <Slider title="Películas" size="slider-small" />

        <div className="center">
          <div id="content" className="peliculas">

            <h2 className="subheader">Listado de películas</h2>
            <p>Selección de las películas favoritas de {this.state.nombre}</p>
            <div>
              <button onClick={this.cambiarTitulo}>
                Cambiar título de Batman
              </button>
            </div>

            {
              /* Para hacer un if dentro del return se utiliza el operador && para comprobar si se cumple la condición:
                this.state.favorita.titulo &&
                    <p className="favorita" style={pStyle}>
                         <strong>La pelicula favorita es: </strong>
                         <span>{this.state.favorita.titulo}</span>
                    </p>
                */

              /* Operador ternario ? se utiliza para verificar si se cumple la condición (this.state.favorita.titulo = true)
               // de lo contrario si se devuelve false imprime (<p>NO HAY PELICULA FAVORITA</p>) :
               this.state.favorita.titulo ? (
                    <p className="favorita" style={pStyle}>
                            <strong>La pelicula favorita es: </strong>
                            <span>{this.state.favorita.titulo}</span>
                    </p>
                    ) : (
                        <p>NO HAY PELICULA FAVORITA</p>
                    )*/
              favorita
            }

            {/** Crear componente pelicula */}
            <div id="articles" className="peliculas">
              {this.state.peliculas.map((pelicula, i) => {
                return (
                  <Pelicula
                    key={i}
                    pelicula={pelicula}
                    indice={i}
                    marcarFavorita={this.favorita}
                  />
                );
              })}
            </div>
          </div>

          <Sidebar blog="false" />
        </div>
      </React.Fragment>
    );
  }
}

export default Peliculas;
