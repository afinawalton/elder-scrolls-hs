import './Card.css';

const Card = ({ img, name, text, set, type }) => {
  return (
    <div className="card">
        <img src={img} alt={name}/>
        <h2>{name}</h2>
        <p>{text}</p>
        <p>{set}</p>
        <p>{type} Type</p>
    </div>
  );
};

export default Card;