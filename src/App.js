//commons imports
import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

// components
import Navigation from './components/nav/navigation';
import Cards from './components/cards/Cards.jsx';
import About from './components/about/about';
import Detail from './components/detail/detail';
import Form from './components/form/form';

//helper routs
import routered from './helpers/Routes.helper';
import Favorites from './components/favorites/Favorites';

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const email = 'a';
  const password = 'a';

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const location = useLocation(); //obtenemos la ubicacion actual de la ruta en la que estamos

  const isNotRoot = location.pathname !== '/';

  // const onSearch = (id) => {
  //   axios(`https://rickandmortyapi.com/api/character/${id}`).then(
  //     ({ data }) => {
  //       if (data.name) {
  //         const characterExists = characters.includes(data);
  //         if (characterExists) {
  //           alert('Este personaje ya se encuentra en la lista.');
  //         } else {
  //           setCharacters((oldChars) => [...oldChars, data]);
  //         }
  //       } else {
  //         window.alert('¡No hay personajes con este ID!');
  //       }
  //     }
  //   );
  // };

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          const characterExists = characters.some(
            (char) => char.id === data.id
          );
          if (characterExists) {
            alert('Este personaje ya se encuentra en la lista.');
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      }
    );
  };

  // Función para obtener un personaje aleatorio
  const randomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;

    axios(`https://rickandmortyapi.com/api/character/${randomId}`)
      .then(({ data }) => {
        if (data.name) {
          // const characterExists = characters.includes(data);
          const characterExists = characters.some(
            (char) => char.id === data.id
          );

          if (characterExists) {
            alert('Este personaje ya se encuentra en la lista.');
          } else {
            setCharacters((characters) => [...characters, data]);
          }
        } else {
          alert(`¡No hay personajes con el ID proporcionado!`);
        }
      })
      .catch((error) => {
        alert(
          `Ocurrió un error al obtener los datos de la API. Por favor, intenta nuevamente más tarde.`
        );
        console.error(error);
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };

  function login(userData) {
    if (userData.password === password && userData.email === email) {
      setAccess(true);
      navigate('/home');
    }
  }

  function logOut() {
    setAccess(false);
    navigate('/');
  }

  return (
    <div className='App'>
      {isNotRoot && (
        <Navigation
          onSearch={onSearch}
          randomCharacter={randomCharacter}
          logout={logOut}
        />
      )}
      <Routes>
        {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
        <Route
          path={routered.Login}
          element={<Form login={login} email={email} password={password} />}
        />
        <Route
          path={routered.Home}
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path={routered.About} element={<About />} />

        <Route path={routered.Detail} element={<Detail />} />
        <Route path={routered.Favorites} element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
