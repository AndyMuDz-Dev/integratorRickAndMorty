import React, { useState } from 'react';
import styles from './Favorites.module.css';
import { connect, useDispatch } from 'react-redux';
import Card from '../card/Card';
import { filterCards, orderCards } from '../../redux/action';
import { AiOutlineSortAscending } from 'react-icons/ai';
import { PiGenderMaleBold } from 'react-icons/pi';

const Favorites = (props) => {
  const { myFavorites } = props;
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (e) => {
    setAux(!aux);
    dispatch(orderCards(e.target.value));
  };
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.ascendeteDescendente}>
        <select onChange={handleOrder} className={styles.selects}>
          <option value='A'>Ascendente</option>
          <option value='D'>Descendente</option>
        </select>
        <label name='' htmlFor='ascendDescend'>
          <AiOutlineSortAscending className={styles.ascendDescend} />
        </label>

        <select onChange={handleFilter} className={styles.selects}>
          <option value=''>Select Gender</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Genderless'>Genderless</option>
          <option value='unknown'>Unknown</option>
        </select>
        <label name='' htmlFor='genderless'>
          <PiGenderMaleBold className={styles.genderless} />
        </label>
      </div>

      {myFavorites.map((char) => {
        return (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin?.name}
            image={char.image}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
