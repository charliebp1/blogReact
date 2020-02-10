import React, { Component } from "react";
import Articles from "./Articles";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Search extends Component {

  render() {

    var searched = this.props.match.params.search;

    return (
      <div id="blog">
        <Slider title={'Búsqueda: '+ searched}
                size="slider-small" />
        <div className="center">
          <div id="content">
            {/*LISTADO DE ARTICULOS QUE VENDRAN DEL API REST DE NODE */}
            <Articles
                search={searched}
            ></Articles>
            
          </div>

          <Sidebar 
              blog="true"
          />
        </div>
      </div>
    );
  }
}

export default Search;
