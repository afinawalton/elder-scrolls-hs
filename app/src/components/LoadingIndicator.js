import "./LoadingIndicator.css";

const LoadingIndicator = ({ hasMoreCards }) => {
  console.log(hasMoreCards)
  if (!hasMoreCards) {
    return <p>No cards left!</p>
  }
  return (
    <div id="loading-area">
      <div id="loader"></div>
      <p>Fetching more cards...</p>
    </div>
  );
};

export default LoadingIndicator;
