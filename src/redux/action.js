//actions types

export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const ORDER = 'ORDER';
export const FILTER = 'FILTER';

// ACTION CREATORS

export const addFav = (Character) => {
  return {
    type: ADD_FAV,
    payload: Character,
  };
};

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

// actions.js
export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
