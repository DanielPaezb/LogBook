import React from 'react';
import './landing.scss'
import img from '../assets/svg/landing.svg'

function Landing () {
  return (
    <section className="section--container">
      <section className="section--midle section--midle1">
        <h1>LogBook</h1>
        <p className="p--lema">Gestiona el mundo en un solo click.</p>
        <p className="p--informacion">
          LogBook es un modulo que permite administrar personal de forma sencilla y práctica, haciendo uso
          de herramientas he ingenio para obtener el mayor rendimiento en sus propositos.
        </p>
      </section>

      <section className="section--midle section--midle2">
        <img className="img--svg" src={ img } alt="Imagen de personal gestionando en celular." />
      </section>
    </section>
  );
}

export default Landing;
