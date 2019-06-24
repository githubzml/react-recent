import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import ShoppingList from "./components/one/index"
import Board from "./components/two/index"
import Game from "./components/four/index"
import Page from "./components/five/index"
function App() {
  return (
    <div className="App">
      <header>芝麻开门</header>
      <ShoppingList name="apple"></ShoppingList>
      <Board></Board>
      <Game></Game>
      {/* <Page></Page> */}
    </div>
  );
}

export default App;
