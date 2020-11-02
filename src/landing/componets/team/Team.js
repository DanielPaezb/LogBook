import React from 'react'

export const Team = () => {
  return(
    <section className="section--container">
    <div className="div--title">
      <h2>Este proyecto fue desarrolado por</h2>
      <img className="img--team" src="../../../assets/svg/Team.svg" alt="Team image" />
    </div>
    <div className="div--team">
      <div className="div--card">
        <div className="div--name">
          <img  alt="Imagen desarrollador" />
          <h5 className="card-title">Nicolas Jiménez</h5>
        </div>
        <p className="card-text">Diseñador UI/UX Front-End developer.</p>
        <div className="div--centerButton">
          <a className="btn btn-primary">Ver perfil.</a>
        </div>
      </div>

      <div className="div--card">
        <div className="div--name">
          <img  alt="Imagen desarrollador" />
          <h5 className="card-title">Daniel  Páez</h5>
        </div>
        <p className="card-text">Front-End developer.</p>
        <div className="div--centerButton">
        </div>
      </div>
    </div>
  </section>
  );
}

export default Team;
