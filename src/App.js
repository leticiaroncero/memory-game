import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
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
        cartoons: this.shuffle(this.state.cartoons)
      });
    } else {
      this.state.clickedCardIds.push(clickedId);
      const score = this.state.score + 1;
      const topScore = this.state.topScore + 1;
      if (score === topScore) {
        this.setState({
          score: score,
          topScore: topScore,
          cartoons: this.shuffle(this.state.cartoons)
        })
      } else {
        this.setState({
          score: score,
          cartoons: this.shuffle(this.state.cartoons)
        })
      }
    }
  };

  shuffle = cartoons => {
    var currentIndex = cartoons.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = cartoons[currentIndex];
      cartoons[currentIndex] = cartoons[randomIndex];
      cartoons[randomIndex] = temporaryValue;
    }

    return cartoons;
  };

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore} />
        <Hero />
        <div className={this.state.score === 0 && this.state.topScore !== 0 ? "cards-container shake-shake" : "cards-container"}>
          {
            this.state.cartoons.map(cartoon => (
              <CartoonCard
                image={cartoon.image}
                alt={cartoon.alt}
                key={cartoon.id}
                id={cartoon.id}
                handleScore={this.handleScore}
              />)
            )
          }
        </div>
      </div>
    )
  }
}

export default App;
