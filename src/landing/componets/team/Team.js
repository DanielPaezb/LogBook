import React from 'react'
import { Link } from "react-router-dom";

export const Team = () => {
  return(
    <section className="section--container">
    <div className="div--title">
      <h2>Este proyecto fue desarrolado por</h2>
      <img className="img--team" src="../../../assets/svg/Team.svg" alt="Team logo" />
    </div>
    <div className="div--team">
      <div className="div--card">
        <div className="div--name">
          <img  alt="Imagen desarrollador" />
          <h5 className="card-title">Nicolas Jiménez</h5>
        </div>
        <p className="card-text">Diseñador UI/UX Front-End developer.</p>
        <div className="div--centerButton">
        <Link to="/">Ver perfil.</Link>
        </div>
      </div>

      <div className="div--card">
        <div className="div--name">
          <img  alt="Imagen desarrollador" />
          <h5 className="card-title">Daniel  Páez</h5>
        </div>
        <p className="card-text">Front-End developer.</p>
        <div className="div--centerButton">
        <Link to="/">Ver perfil.</Link>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Team;
