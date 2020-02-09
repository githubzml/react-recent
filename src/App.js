import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Index1 from "./router/index1"
import Page1 from "./router/page1"
import Page2 from "./router/page2"
// import Apage1 from "./router/apage"
import ShoppingList from "./components/one/index"
import Board from "./components/two/index"
import Game from "./components/four/index"
import Page from "./components/five/index"

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Game}>
        </Route>
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        {/* <Route path="/page2/apage" component={Apage1} /> */}
      </Router>
      // <Router>
      //   <Switch >
      //     <Route component={Index1}>

      //     </Route>
      //   </Switch>
      // </Router>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header>芝麻开门</header>
//       <ShoppingList name="apple"></ShoppingList>
//       <Board></Board>
//       <Game></Game>
//       {/* <Page></Page> */}
//     </div>
//   );
// }

export default App;
