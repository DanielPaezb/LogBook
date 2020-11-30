import React from 'react'
import './information.scss'

export const Information = () => {
  return (
    <section className="containerItem section--Information">
      <h2 className="h2--information"> ¿Qué es LogBook? </h2>
      <p className="p--information">
        LogBook es un modulo que permite administrar personal de forma sencilla y práctica, haciendo uso de herramientas he ingenio para obtener el mayor rendimiento en sus propositos.
      </p>
      <h2 className="h2--information">
        Objetivos especificos
      </h2>
      <p className="p--information">
        Permitirle al administrador modificar, editar, crear y deshabilitar aprendices e instructores.
        Crear un módulo que permita al instructor gestionar su propia disponibilidad para el Sena.
        Gestionar las diferentes especialidades que puede manejar el instructor.
        Conceder a los tres tipos de usuarios la posibilidad de gestionar sus datos y contraseñas.
      </p>
      <h2 className="h2--information"> Planteamiento del problema.</h2>
      <p className="p--information">
        Debido a que los aprendices presentan dificultades al momento de consultar sus horarios y/o ambientes de formación una vez comienzan su proceso de aprendizaje,
        se evidencia una necesidad de crear un sistema que gestione horarios, para ello se requiere empezar por un módulo web para instructores que gestione usuarios, de tal forma que pueda ser escalable al proyecto completo.
      </p>
    </section>
  );
}

export default Information;
