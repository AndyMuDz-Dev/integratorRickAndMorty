import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import style from './nav.module.css';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  const { onSearch, randomCharacter, logout } = props;
  return (
    <div className={style.container}>
      <Link to={'/about'}>
        <button className={style.buttonAbout}>About</button>
      </Link>
      <Link to={'/home'}>
        <button className={style.buttonHome}>Home</button>
      </Link>
      <Link to={'/favorites'}>
        <button className={style.buttonHome}>Favorites</button>
      </Link>
      <SearchBar onSearch={onSearch} randomCharacter={randomCharacter} />

      <button onClick={logout} className={style.buttonHome}>
        LogOut
      </button>
    </div>
  );
};

export default Nav;
