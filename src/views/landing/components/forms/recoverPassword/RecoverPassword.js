import React from "react";
import "../recoverPassword/recoverPassword.scss";

export const RecoverPassword = () => {
  return (
    <section className="section-container-form">
      <form action="" className="form-container">
        <div className="form-text">
          <a href="./index.html">LOGBOOK</a>
          <p className="item-p-form2">
            Por favor ingresa tu correo para enviarte un link de recuperación
          </p>
        </div>
        <div className="form--user-date">
          <input
            type="email"
            name="email"
            id=""
            placeholder="Correo"
            className="form--user"
          />
        </div>
        <div className="form-container-submit-2">
          <input type="submit" value="Enviar" className="form--submit--sub3" />
        </div>
      </form>
      <div className="item-terms">
        <a href="./index.html">Terminos de uso. Politica de privacidad</a>
      </div>
    </section>
  );
};

export default RecoverPassword;