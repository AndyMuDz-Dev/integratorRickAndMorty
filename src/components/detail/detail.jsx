import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './detail.module.css';

function Detail() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.container}>

      <div className={style.content}>
        <img src={character.image} alt='Imagen card' className={style.imageStyle} />
        <div className={style.description}>
          <h2 className={style}>{`Name: ${character.name}`}</h2>
          <h2 className={style}>{`Status: ${character.status}`} </h2>
          <h2 className={style}>{`Specie: ${character.species}`}</h2>
          <h2 className={style}>{`Gender: ${character.gender}`}</h2>
          <h2 className={style}>{'Origin: ' + ' ' + character.origin?.name}</h2>
        </div>
      </div>
    </div>
  );
}

export default Detail;
