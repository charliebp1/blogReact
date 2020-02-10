import React, { Component } from 'react';

// Importar componentes
import MiComponente from './MiComponente';

class SeccionPruebas extends Component {

    // Se crea la variable contador
    contador = 0;

    // Se crea constructor para definir state
    /*
    constructor(props){
        super(props);

        this.state = {
            contador: 0
        };
    }*/

    state = {
        contador: 0
    };

    // Equivalente a hacer : var HolaMundo = () => {}
    HolaMundo(nombre, edad) {
        var presentacion = (
            <div>
                <h2>Hola, soy {nombre}</h2>
                <h3>Tengo {edad} años</h3>
            </div>
        );

        return presentacion;
    }

    // Se puede definir como función anónima =>
    sumar = () => {
        // this.contador++;
        // this.contador = this.contador+1;
        // (Mal no funciona) this.state.contador = this.state.contador + 1;
        // Hay que utilizar si o si la función setState
        this.setState({
            contador : (this.state.contador + 1)
        });
    }

    // Si se define como función normal hay que usar .bind(this) en el evento onClik
    restar(){
        // this.contador--;
        // (Mal no funciona) this.contador = this.contador-1;
        // Hay que utilizar si o si la función setState
        this.setState({
            contador : (this.state.contador - 1)
        });
        
    }

    render() {
        var nombre = "Carlos Britos";

        return (
            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>
                <p>
                    Hola bienvenido al curso de React !!!
                </p>

                <h2 className="subheader">Funciones y JSX básico</h2>
                { this.HolaMundo(nombre, 38) } 

                <h2 className="subheader">Componentes</h2>
                <section className="componentes">

                    <MiComponente />
                    <MiComponente />

                </section>

                <h2 className="subheader">Estado</h2>
                <p>
                    Contador: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar}/>
                    <input type="button" value="Restar" onClick={this.restar.bind(this)}/>       
                </p>
            </section>
        );
    }
}

export default SeccionPruebas;