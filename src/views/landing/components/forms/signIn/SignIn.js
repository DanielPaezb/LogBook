import React from "react";
import '../signIn/signIn.scss';
import {Link} from 'react-router-dom'
export const SignIn = () => {
  return (
    <section className="section-container-form">
      <form method="post" className="form-container">
        <div className="form-text">
          <a href="./index.html">LOGBOOK</a>
          <p>¡Bienvenido de vuelta!</p>
        </div>
        <div className="form--user-date">
          <input
            name="user"
            type="text"
            placeholder="Usuario"
            className="form--user"
          />
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            className="form--user"
          />
        </div>
        <div className="form-container-validacion">
          <div className="item-check">
            <input type="checkbox" className="form--validacion" id="validar" />
            <label for="validar"> Recuerdame</label>
          </div>
          <div className="item-recover">

            <a href="/login/recover">¿Olvidaste tu contraseña?</a>
          </div>
        </div>
        <div className="form-container-submit">
          <input type="submit" value="Ingresar" className="form--submit sub1" />
  
          <Link to="/dash/home" className="form--submit sub1" >Ingresar</Link>
          <Link to="/" className="form--submit sub2">Registrarse</Link>
        </div>
        <div className="item-terms">
          <a href="./index.html">Terminos de uso. Politica de privacidad</a>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
