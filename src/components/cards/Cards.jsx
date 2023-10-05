import Card from '../card/Card';
import style from './cards.module.css';

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div className={style.container}>
      {characters.map((person) => {
        return (
          <Card
            key={person.id}
            id={person.id}
            name={person.name}
            status={person.status}
            species={person.species}
            gender={person.gender}
            origin={person.origin.name}
            image={person.image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
