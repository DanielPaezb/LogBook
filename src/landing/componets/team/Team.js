import React from 'react'
import {Link} from "react-router-dom"
import imageUrl from '../../../assets/svg/Team.svg'
import teamData from './teamData'
import './team.scss';

export const Team = () => {
  return (
    <section className="containerItem section--containerTeam">
      {teamData.map(dat => (
        <div className="div--cardTeam">
          <img className="img--cardTeam" src={dat.picture} alt="Image member team" />
          <h3 className="h3--cardTitle">{dat.name}</h3>
          <p>{dat.roll}</p>
          <a className="a--cardLink" href={dat.gitUlr} target="_blank">Perfil</a>
        </div>
      ))}
    </section>
  );
}

export default Team;

