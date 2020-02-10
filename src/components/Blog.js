import React, { Component } from "react";
import Articles from "./Articles";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Blog extends Component {

  render() {

    return (
      <div id="blog">
        <Slider title="Blog"
                size="slider-small" />
        <div className="center">
          <div id="content">
            {/*LISTADO DE ARTICULOS QUE VENDRAN DEL API REST DE NODE */}
            <Articles></Articles>
            
          </div>

          <Sidebar 
              blog="true"
          />
        </div>
      </div>
    );
  }
}

export default Blog;
