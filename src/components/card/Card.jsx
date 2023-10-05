import style from './card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/action';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

function Card(props) {
  const { onClose, addFav, removeFav, myFavorites } = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav ? removeFav(props.id) : addFav(props);

    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.container}>
      {isFav ? (
        <button onClick={handleFavorite} className={style.buttonIsFav}>
          ❤️
        </button>
      ) : (
        <button onClick={handleFavorite} className={style.buttonIsFav}>
          🤍
        </button>
      )}
      <button
        onClick={() => {
          onClose(props.id);
        }}
        className={style.button}
      >
        X
      </button>
      <Link to={`/detail/${props.id}`} className={style.link}>
        <img src={props.image} alt='Imagen card' className={style.imageCard} />
        <div className={style.description}>
          <h2 className={style.name}>{props.name}</h2>
          <h2 className={style.status}>{props.status} </h2>
          <h2 className={style.status}>{props.species}</h2>
          <h2 className={style.status}>{props.gender}</h2>
          <h2>{props.origin?.name}</h2>
        </div>
      </Link>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },

    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
