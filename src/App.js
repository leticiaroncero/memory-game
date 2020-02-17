import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/Navbar";
import CartoonCard from "./components/CartoonCard";
import cartoons from "./cartoons.json";


class App extends Component {

  state = {
    cartoons,
    score: 0,
    clickedCardIds: [],
    topScore: 0
  };

  handleScore = clickedId => {
    var contained = false;
    for (var i = 0; i < this.state.clickedCardIds.length; i++) {
      if (this.state.clickedCardIds[i] === clickedId) {
        contained = true;
        break;
      }
    }

    if (contained) {
      this.setState({
        score: 0,
        clickedCardIds: [],
      });
    } else {
      this.state.clickedCardIds.push(clickedId)
      const score = this.state.score + 1;
      const topScore = this.state.topScore + 1;
      if (score === topScore) {
        this.setState({ score: score, topScore: topScore })
      } else {
        this.setState({ score: score })
      }
    }
  }

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore} />
        {
          this.state.cartoons.map(cartoon => (
            <CartoonCard
              image={cartoon.image}
              key={cartoon.id}
              id={cartoon.id}
              handleScore={this.handleScore}
            />)
          )
        }
      </div>
    )
  }
}

export default App;
