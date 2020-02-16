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
  };

  handleScore = event => {
    const score = this.state.score + 1;
    this.setState({ score: score })
  }

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score} />
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
