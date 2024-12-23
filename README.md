# Match Game

A fun and engaging **Match Game** built with **React.js**. 
The game challenges users to match pairs of cards as quickly as possible, testing both memory and focus. 
Play it now: (https://jigeesha-yarra.github.io/match-game/)

## Features

- **Interactive Gameplay**: Flip cards to reveal their content and find matching pairs.
- **Timer**: Keep track of how quickly you can complete the game.
- **Responsive Design**: Fully responsive, ensuring a seamless experience on desktop and mobile devices.
- **Dynamic Feedback**: Highlights matched pairs and resets mismatched attempts.
- **Restart Option**: Allows players to restart the game anytime.

## Project Structure


src/
├── components/
│   ├── App.js            # Main component rendering the game
│   ├── Card.js           # Card component to display each game card
│   ├── Board.js          # Game board component that holds all cards
│   ├── Header.js         # Header with timer and restart functionality
│   └── Footer.js         # Footer with additional information
├── assets/               # Game assets (images/icons)
├── styles/
│   ├── App.css           # Main CSS for styling
│   ├── Card.css          # Styling for individual cards
│   ├── Board.css         # Styling for the game board
│   └── Header.css        # Styling for the header
├── utils/
│   └── helpers.js        # Utility functions for game logic
├── index.js              # Entry point for React app
└── package.json          # Project dependencies and scripts


## How to Play
1. Start the game by clicking on a card to flip it.
2. Flip a second card to see if it matches the first one.
3. If the cards match, they remain visible. If not, they flip back over.
4. Continue until all pairs are matched.
5. Challenge yourself to complete the game in the shortest time possible!

## Technologies Used
# React.js: For building the UI components and managing the game state.
# CSS: For styling and animations.
# React Hooks: To manage state and side effects efficiently.