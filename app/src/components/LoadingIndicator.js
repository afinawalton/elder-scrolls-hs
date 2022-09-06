import "./LoadingIndicator.css";

const LoadingIndicator = ({ hasMoreCards }) => {
  return (
    <div id="loading-area">
      <div id="loader"></div>
      <p>Fetching more cards...</p>
    </div>
  );
};

export default LoadingIndicator;
