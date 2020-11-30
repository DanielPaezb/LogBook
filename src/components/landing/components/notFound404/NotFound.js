import React from 'react'
import { Link } from "react-router-dom";
import './notFound.scss'

export const NotFound = () => {
    return (
        <section className="section--container">
            <p className="p--principal">¿Dónde está el contenido que buscas?</p>
            <p className="p--secundary">Extinto.</p>
            <h1>404</h1>
            <Link to="/">Volver a unlugar feliz</Link>
        </section>
    );
}

export default NotFound;