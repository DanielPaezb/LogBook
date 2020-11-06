import React from 'react';
import '../signUp/signUp.scss';

export const SignUp = () => {
    return (
        <section class="main-form-section">
          <form action="" class="form-container">
            <div class="form-text">
              <a href="./index.html">LogBook</a>
              <p>Por favor completa los campos para crear tu cuenta</p>
            </div>
            <div class="div-item-names">
              <input
                class="item-type1"
                type="text"
                name="first-name"
                placeholder="Primer nombre"
                required
              />
              <input
                class="item-type1"
                type="text"
                name="second-name"
                placeholder="Segundo nombre"
              />
            </div>
            <div class="div-item-lastname">
              <input
                class="item-type1"
                type="text"
                name="first-last-name"
                placeholder="Primer apellido"
                required
              />
              <input
                class="item-type1"
                type="text"
                name="second-last-name"
                placeholder="Segundo apellido"
              />
            </div>
            <div class="div-item-email">
              <input
                class="item-type1"
                type="email"
                name="email"
                placeholder="Mi correo@misena.edu.co"
                pattern="+@[misena.edu.co]"
                required
              />
            </div>
            <div class="div-item-ageAndCode">
              <input
                class="item-type1"
                name="age"
                type="text"
                placeholder="Edad"
                required
              />
              <input
                class="item-type1"
                type="text"
                name="code"
                placeholder="Código referido"
              />
            </div>
            <div class="div-item-password">
              <input
                class="item-type1"
                type="password"
                name="password"
                placeholder="Contraseña"
                required
              />
              <input
                class="item-type1"
                type="password"
                name="confirmPassword"
                placeholder="Repetir contraseña"
                required
              />
            </div>
            <div class="form-item-validacion">
              <div class="item-check">
                <input
                  type="checkbox"
                  class="form--validacion"
                  id="Deacuerdo"
                  required
                />
                <label for="Deacuerdo">
                  {" "}
                  Estoy de acuerdo con los términos y condiciones
                </label>
              </div>
            </div>
            <div class="div-item-button">
              <input type="submit" value="Registrate" class="item-button" />
            </div>
            <div class="div-item-answer">
              <a href="./loggin.html"> ¿Ya tienes cuenta? Ingresa aquí.</a>
            </div>
          </form>
          <div class="item-terms">
            <a href="./index.html">Terminos de uso. Politica de privacidad</a>
          </div>
        </section>
      );
}

export default SignUp;