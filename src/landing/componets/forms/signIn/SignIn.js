import React from "react";
import '../signIn/signIn.scss';

export const SignIn = () => {
  return (
    <section class="section-container-form">
      <form method="post" class="form-container">
        <div class="form-text">
          <a href="./index.html">LOGBOOK</a>
          <p>¡Bienvenido de vuelta!</p>
        </div>
        <div class="form--user-date">
          <input
            name="user"
            type="text"
            placeholder="Usuario"
            class="form--user"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            class="form--user"
            required
          />
        </div>
        <div class="form-container-validacion">
          <div class="item-check">
            <input type="checkbox" class="form--validacion" id="validar" />
            <label for="validar"> Recuerdame</label>
          </div>
          <div class="item-recover">

            <a href="/login/recover">¿Olvidaste tu contraseña?</a>
          </div>
        </div>
        <div class="form-container-submit">
          <input type="submit" value="Ingresar" class="form--submit sub1" />
          <a href="./dashboard.html" class="form--submit sub1">
            Ingresar
          </a>
          <a href="./form.html" class="form--submit sub2">
            Registrarse
          </a>
        </div>
        <div class="item-terms">
          <a href="./index.html">Terminos de uso. Politica de privacidad</a>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
