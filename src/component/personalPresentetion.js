import React, { Component } from 'react';
import photo from '../image/Breno_Foto.png';
import '../App.css'; 
import Slide from './carousel';

class Presentetion extends Component {
  render() {
    return (
      <div>
        <div className="title">
					<h1 className="name"><b>Breno Alves</b></h1>
					<h3 className="job">Desenvolvedor Full Stack</h3>
				</div>
				<div className="img-profile">
					<img className="photo" src={ photo } alt="Foto Breno Alves" />
        </div>
        <div className="slide">
          <Slide />
        </div>
      </div>
    )
  }
}

export default Presentetion;
