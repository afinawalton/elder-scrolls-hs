const fetchCards = ({ type, value, limit = null }) => {
  let url = "https://api.elderscrollslegends.io/v1/cards";
  // fetch cards should grab specified cards
  // it should set the cards on the page equal to the result of the promise
  // on first rendering, render first 20 cards
  // on infinite scroll, call fetchMoreCards method
  // in different cases, different cards should be fetched
  switch (type) {
    // searching for specific cards
    case "search":
      url += `?name=${value}`;
      break;
    // fetching cards on scroll
    case "loading":
      url += `?pageSize=${limit}`;
      break;
    // on initial page load
    default:
      url += `?pageSize=${limit}`;
  }

  // call the API
  let cards = fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.cards;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("Data fetch attempted!");
    });
  // store the values in JSON

  return cards;
};

export { fetchCards };
