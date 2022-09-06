import { fetchCards } from '../helpers';
import './Search.css';

const Search = ({ filterCards, setLimit }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const searchValue = document.querySelector('input[name="search"]').value;
    if (!searchValue.length) {
      console.log('Please enter a search term.')
      return;
    }
    // grab value of textbox
    // call api with this as the keyword
    setLimit(20);
    const cards = await fetchCards({ type: "search", value: searchValue });
    console.log(cards);
    filterCards(cards);
    return false;
    // remove event listener on scroll
  }

  return (
      <form action="" id="search">
        <input type="text" placeholder="Search for cards" name="search" />
        <button type="submit" onClick={handleSubmit}>Search</button>
      </form>
  )
};

export default Search;