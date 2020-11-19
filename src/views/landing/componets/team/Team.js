import React from 'react'
import teamData from './teamData'
import './team.scss';

export const Team = () => {
  return (
    <section className="containerItem section--containerTeam">
      {teamData.map(dat => (
        <div className="div--cardTeam" key={dat.id}>
          <img className="img--cardTeam" src={dat.picture} alt="Member team" />
          <h3 className="h3--cardTitle">{dat.name}</h3>
          <p>{dat.roll}</p>
          <a className="a--cardLink" href={dat.gitUlr} rel="noreferrer" target="_blank">Perfil</a>
        </div>
      ))}
    </section>
  );
}

export default Team;

