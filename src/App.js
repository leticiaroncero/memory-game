import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/Navbar";
import CartoonCard from "./components/CartoonCard";
import cartoons from "./cartoons.json";


class App extends Component {

  state = {
    cartoons
  };

  render() {
    return (
      <div>
        <Navbar/>
        {
          this.state.cartoons.map(cartoon => (
            < CartoonCard
              image={cartoon.image} />)
          )
        }
      </div>
    )
  }
}

export default App;
