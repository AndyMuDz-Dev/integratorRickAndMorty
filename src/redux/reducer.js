import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action';

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      const copy1 = [...state.allCharacters];
      copy1.push(payload);

      return { ...state, myFavorites: copy1, allCharacters: copy1 };

    case REMOVE_FAV:
      let copy2 = state.myFavorites.filter((char) => {
        return char.id !== Number(payload);
      });

      return {
        ...state,
        myFavorites: copy2,
      };

    case FILTER:
      const copy3 = state.allCharacters.filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites: copy3,
      };

    case ORDER:
      let copy4 = [...state.allCharacters];
      if (payload === 'A') {
        copy4.sort((a, b) => a.id - b.id); // Ascendente
      } else if (payload === 'D') {
        copy4.sort((a, b) => b.id - a.id); // Descendente
      }

      return {
        ...state,
        myFavorites: copy4,
      };

    default:
      return state;
  }
};

export default rootReducer;
