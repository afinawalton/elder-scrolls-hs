import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Cards from './components/Cards';

function App() {
  const [cards, setCards] = useState([]);
  const [moreCards, setMoreCards] = useState([]);

  useEffect(() => {
    // call the API
    fetch('https://api.elderscrollslegends.io/v1/cards')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setCards(data.cards.slice(0, 20));
      setMoreCards(data.cards.slice(20));
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log('Data fetch attempted!')
    })
    // store the values in JSON
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Elder Scrolls FE Exercise</h1>
      </header>
      <section id="description">
          <h2>What is Elder Scrolls?</h2>
          <blockquote>The Elder Scrolls is a series of action role-playing video games primarily developed by Bethesda Game Studios and published by Bethesda Softworks. The series focuses on free-form gameplay in an open world. Morrowind, Oblivion and Skyrim all won Game of the Year awards from multiple outlets. The series has sold more than 58 million copies worldwide.</blockquote>
          <p><cite><a href="https://en.wikipedia.org/wiki/The_Elder_Scrolls">Wikipedia article about The Elder Scrolls</a></cite></p>
        </section>
      <main id="cards">
      <Cards cards={cards} moreCards={moreCards} />
      </main>
    </div>
  );
}

export default App;
