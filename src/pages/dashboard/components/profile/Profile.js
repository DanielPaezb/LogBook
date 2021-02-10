import React from "react";
import "./Profile.scss";
import Header from './components/header/Header';

export const Profile = (props) => {
  return (
    <section className="container">
      <Header 
      nombre = 'Daniel Camilo'
      apellido = 'Páez Bonilla'
      correo = 'dcpaez595@misena.edu.co'
      edad = '25'
      rh = 'AB +'
      jornada = 'Diurna'
      ficha = '1963872'
      rol = 'APRENDIZ '
      estado = 'Activo'
      institucion = 'SENA'
      programa = 'Técnico en Programación de Software'
      descripcion = 'El mundo es un pañuelo'
      etapa = 'Lectiva'
      practicas = 'N/A'
      />
    </section>
  );
};

export default Profile;
