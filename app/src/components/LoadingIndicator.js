import './LoadingIndicator.css';

const LoadingIndicator = () => {
  return (
    <div id="loading">
      <div id="loader"></div>
      <p>
        Fetching more cards...
      </p>
    </div>
  )
}

export default LoadingIndicator;