import React from 'react'
import './404NotFound.scss'

export const NotFound = () => {
    return (
        <section className="section--container">
            <p className="p--principal">¿Dónde está el contenido que buscas?</p>
            <p className="p--secundary">Extinto.</p>
            <h1>404</h1>
            <a  className="btn btn-primary" >Volver a un lugar feliz</a>
        </section>
    );
}

export default NotFound;