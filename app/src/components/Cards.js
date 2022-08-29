import Card from "./Card";

const Cards = ({ cards, isFetching }) => {
  // store the first 20 [0:20] cards in a new array? or using .slice
  // map over each object, and pull out the necessary properties
  // pass those properties as props into Card components

  let firstCards = cards.map((card, index) => {
    const { imageUrl, name, text, set, type } = card;
    return (
      <Card key={index} img={imageUrl} name={name} text={text} set={set && set.name} type={type} />
    )
  });

  return (
    <>
      {firstCards}
      {isFetching && 'Fetching more cards...'}
    </>
    );
};

export default Cards;