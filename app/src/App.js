import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import LoadingIndicator from "./components/LoadingIndicator";
import useInfiniteScroll from "./hooks/useInfiniteScroll";

function App() {
  const [cards, setCards] = useState([]);
  const [moreCards, setMoreCards] = useState([]);

  useEffect(() => {
    // call the API
    fetch("https://api.elderscrollslegends.io/v1/cards")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCards(data.cards.slice(0, 20));
        setMoreCards(data.cards.slice(20));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Data fetch attempted!");
      });
    // store the values in JSON
  }, []);

  const fetchMoreCards = () => {
    console.log('fetchMoreCards called!');
    setTimeout(() => {
      // add 20 more cards to cards
      // as long as moreCards still has cards left
      if (moreCards.length) {
        setCards([...cards, ...moreCards.slice(0, 20)]);
        // more cards only holds remaining cards
        setMoreCards(moreCards.slice(20));
      }
      // always set fetching to false, otherwise 'still fetching' message will still appear
      setIsFetching(false);
    }, 2000);
  };
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreCards);

  return (
    <div id="App">
      <header id="title">
        <h1>The Elder Scrolls</h1>
      </header>
      <main id="main">
        <section id="description">
          <h2>What is Elder Scrolls?</h2>
          <blockquote>
            The Elder Scrolls is a series of action role-playing video games primarily developed by
            Bethesda Game Studios and published by Bethesda Softworks. The series focuses on
            free-form gameplay in an open world. Morrowind, Oblivion and Skyrim all won Game of the
            Year awards from multiple outlets. The series has sold more than 58 million copies
            worldwide.
          </blockquote>
          <p>
            <cite>
              <a href="https://en.wikipedia.org/wiki/The_Elder_Scrolls">
                Wikipedia article about The Elder Scrolls
              </a>
            </cite>
          </p>
        </section>
        <section id="displayCards">
          {!cards.length && <LoadingIndicator />}
          <Cards cards={cards} moreCards={moreCards} isFetching={isFetching} />
        </section>
      </main>
    </div>
  );
}

export default App;
