import './Card.css';

const Card = ({ img, name, text, set, type }) => {

  return (
    <div className="card">
        <img className='cardImg' src={img} alt={name}/>
        <h2>{name}</h2>
        {text && <p>{text}</p>}
        <p id='set'>{set}</p>
        <p id='type'>{type} Type</p>
    </div>
  );
};

export default Card;