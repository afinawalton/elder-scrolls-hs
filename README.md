# The Elder Scrolls - Highspot FE Exercise

## Description
A React application that displays Elder Scrolls cards from a [public API](https://docs.elderscrollslegends.io/#api_v1cards_list).

## Requirements
- Fetch all the cards from the API
- Show results in a card grid format with the image prominently displayed.
- Each card displays: Image, Name, Text, Set Name, and Type. Additional fields are optional.
- Initially, fetch and display the first 20 results returned by the API.
- As the user scrolls down the page, load and append additional cards using “infinite scroll.”
- Retrieve additional pages of results as-needed but do not load more than 20 cards with each request.
- Display a loading indicator when communicating with the API.
- Use a responsive design that accommodates, at minimum, desktop and mobile.
- Use modern open-source web technologies to implement your solution (React, Backbone, Angular, Vue, Underscore, etc.).
- Allow the user to search for cards by Name.
- Provide instructions for prerequisites, installation, and application setup and build in a README file.

## Setup
1. Run the `yarn start` command in elder-scrolls-hs/app directory.
2. Open `http://localhost:3000/` in the browser to run the web app locally.
3. When the app first loads, the first 20 cards are pulled from the Elder Scrolls API.
4. Search for cards using the search field located below the main description.
5. Scroll to the bottom of the browser to load 20 more cards from the API.

## Preview
### Desktop
![localhost_3000_](https://user-images.githubusercontent.com/45860724/188942795-48bc3dfb-e5df-48d1-887d-7a8713dd34b1.png)
### Mobile
![localhost_3000_(iPhone SE)](https://user-images.githubusercontent.com/45860724/188943400-3e949e98-5203-4e6e-b589-d38df95e8f21.png)
