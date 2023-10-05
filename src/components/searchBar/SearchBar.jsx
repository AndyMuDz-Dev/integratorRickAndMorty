import React, { useState } from 'react';
import style from './search.module.css';

export default function SearchBar(props) {
  const { onSearch, randomCharacter } = props;
  const [id, setId] = useState('');

  const handleChange = (event) => {
    let valor = event.target.value;
    setId(valor);
  };

  return (
    <div>
      <div className={style.conInput}>
        <input
          type='search'
          className={style.inputSearch}
          placeholder='  Search ID'
          onChange={handleChange}
          value={id}
        />
        <button
          className={style.buttonSearch}
          onClick={() => {
            onSearch(id);
            setId(''); // Limpiar el input después de enviar
          }}
        >
          Agregar
        </button>
        <button
          className={style.buttonSearch}
          onClick={() => {
            randomCharacter(); 
          }}
        >
          Random
        </button>
      </div>
    </div>
  );
}
