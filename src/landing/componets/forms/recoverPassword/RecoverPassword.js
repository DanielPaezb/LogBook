import React from "react";
import "../recoverPassword/recoverPassword.scss";

export const RecoverPassword = () => {
  return (
    <section class="section-container-form">
      <form action="" class="form-container">
        <div class="form-text">
          <a href="./index.html">LOGBOOK</a>
          <p class="item-p-form2">
            Por favor ingresa tu correo para enviarte un link de recuperación
          </p>
        </div>
        <div class="form--user-date">
          <input
            type="email"
            name="email"
            id=""
            placeholder="Correo"
            class="form--user"
          />
        </div>
        <div class="form-container-submit-2">
          <input type="submit" value="Enviar" class="form--submit--sub3" />
        </div>
      </form>
      <div class="item-terms">
        <a href="./index.html">Terminos de uso. Politica de privacidad</a>
      </div>
    </section>
  );
};

export default RecoverPassword;