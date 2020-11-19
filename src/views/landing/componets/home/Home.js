import React from 'react'
import img from '../../../../assets/svg/landing.svg';
import './home.scss';

export const Home = () => {
  return (
    <>
      <section className="section--main">
        <section className="containerItem section--mainItem1 animate__animated animate__fadeInDown">
          <h1>LogBook</h1>
          <p className="p--lema">Gestiona el mundo en un solo click.</p>
          <p className="p--informacion">
            LogBook es un modulo que permite administrar personal de forma sencilla y práctica, haciendo uso
            de herramientas he ingenio para obtener el mayor rendimiento en sus propositos.
                    </p>
        </section>
        <section className="containerItem section--mainItem2 animate__animated animate__fadeInUp">
          <img className="img--svgHome" src={img} alt="Imagen de personal gestionando en celular." />
        </section>
      </section>
    </>
  );
}

export default Home;
