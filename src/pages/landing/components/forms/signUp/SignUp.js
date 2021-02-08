import React from 'react';
import '../signUp/signUp.scss';

export const SignUp = () => {
    return (
        <section className="main-form-section">
          <form action="" className="form-container">
            <div className="form-text">
              <a href="./index.html">LogBook</a>
              <p>Por favor completa los campos para crear tu cuenta</p>
            </div>
            <div className="div-item-names">
              <input
                className="item-type1"
                type="text"
                name="first-name"
                placeholder="Primer nombre"
                required
              />
              <input
                className="item-type1"
                type="text"
                name="second-name"
                placeholder="Segundo nombre"
              />
            </div>
            <div className="div-item-lastname">
              <input
                className="item-type1"
                type="text"
                name="first-last-name"
                placeholder="Primer apellido"
                required
              />
              <input
                className="item-type1"
                type="text"
                name="second-last-name"
                placeholder="Segundo apellido"
              />
            </div>
            <div className="div-item-email">
              <input
                className="item-type1"
                type="email"
                name="email"
                placeholder="Mi correo@misena.edu.co"
                pattern="+@[misena.edu.co]"
                required
              />
            </div>
            <div className="div-item-ageAndCode">
              <input
                className="item-type1"
                name="age"
                type="text"
                placeholder="Edad"
                required
              />
              <input
                className="item-type1"
                type="text"
                name="code"
                placeholder="Código referido"
              />
            </div>
            <div className="div-item-password">
              <input
                className="item-type1"
                type="password"
                name="password"
                placeholder="Contraseña"
                required
              />
              <input
                className="item-type1"
                type="password"
                name="confirmPassword"
                placeholder="Repetir contraseña"
                required
              />
            </div>
            <div className="form-item-validacion">
              <div className="item-check">
                <input
                  type="checkbox"
                  className="form--validacion"
                  id="Deacuerdo"
                  required
                />
                <label for="Deacuerdo">
                  {" "}
                  Estoy de acuerdo con los términos y condiciones
                </label>
              </div>
            </div>
            <div className="div-item-button">
              <input type="submit" value="Registrate" className="item-button" />
            </div>
            <div className="div-item-answer">
              <a href="./loggin.html"> ¿Ya tienes cuenta? Ingresa aquí.</a>
            </div>
          </form>
          <div className="item-terms">
            <a href="./index.html">Terminos de uso. Politica de privacidad</a>
          </div>
        </section>
      );
}

export default SignUp;