import React from 'react'
import './information.scss'

export const Information = () => {
  return (
<div className="accordion" id="accordionExample">
    <div className="card">
      <div className="card-header" id="headingOne">
        <h2 className="mb-0">
          <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          ¿Qué es LogBook?
          </button>
        </h2>
      </div>
  
      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div className="card-body">
            LogBook es un modulo que permite administrar personal de forma sencilla y práctica, haciendo uso de herramientas he ingenio para obtener el mayor rendimiento en sus propositos.
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header" id="headingTwo">
        <h2 className="mb-0">
          <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Objetivos especificos
          </button>
        </h2>
      </div>
      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
        <div className="card-body">
            Permitirle al administrador modificar, editar, crear y deshabilitar aprendices e instructores.
            Crear un módulo que permita al instructor gestionar su propia disponibilidad para el Sena.
            Gestionar las diferentes especialidades que puede manejar el instructor.
            Conceder a los tres tipos de usuarios la posibilidad de gestionar sus datos y contraseñas.
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card-header" id="headingThree">
        <h2 className="mb-0">
          <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Planteamiento del problema.
          </button>
        </h2>
      </div>
      <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
        <div className="card-body">
            Debido a que los aprendices presentan dificultades al momento de consultar sus horarios y/o ambientes de formación una vez comienzan su proceso de aprendizaje,
            se evidencia una necesidad de crear un sistema que gestione horarios, para ello se requiere empezar por un módulo web para instructores que gestione usuarios, de tal forma que pueda ser escalable al proyecto completo.
        </div>
      </div>
    </div>
</div>
  );
}

export default Information;
