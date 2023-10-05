import React from 'react';
import style from './about.module.css';

function About() {
  const nombreCompleto = 'Andrés Romeiro Rios Herrera';

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1>Bienvenid@ a mi web de integración "Rick And Morty" </h1>
        <p className={style.parrafo}>
          Mi nombre es: {nombreCompleto}.
          <span className={style.spanAbout}>
            {' '}
            Estamos en construcción de esta grandiosa web por medio de las
            homeworks integradoras que nos brinda Henry.
          </span>{' '}
        </p>
      </div>
    </div>
  );
}

export default About;
