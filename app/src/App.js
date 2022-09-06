import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Search from "./components/Search";
import LoadingIndicator from "./components/LoadingIndicator";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import { fetchCards } from "./helpers";

function App() {
  const [cards, setCards] = useState([]);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    const renderCards = async () => {
      const data = await fetchCards({ type: "array", value: cards, limit });
      console.log(data);
      setCards(data);
    }
    renderCards();
  }, []);

  const fetchMoreCards = async () => {
    setTimeout(async () => {
      console.log('limit is currently', limit);
      if (limit < 100 ) {
        setLimit(limit + 20);
        const data = await fetchCards({ type: "loading", value: null, limit });
        setCards(data);
      }
      // always set fetching to false, otherwise 'still fetching' message will still appear
      setIsFetching(false);
    }, 1000);
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
          <Search filterCards={setCards} setLimit={setLimit} />
          {!cards.length && <LoadingIndicator />}
          <Cards cards={cards} isFetching={isFetching} />
        </section>
      </main>
    </div>
  );
}

export default App;
