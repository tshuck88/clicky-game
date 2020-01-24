import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import images from "./images.json";

class App extends Component {

  state = {
    images,
    score: 0,
    topScore: 0,
    displayMessage: "Click an image to begin",
  };

  handleClick = event => {
    const id = event.target.id
    const image = images.filter(image => image.id === parseInt(id))[0]

    if (image.clicked === "false") {
      image.clicked = "true";
      this.setState(
        {
          displayMessage: "You guessed correctly!",
          score: this.state.score + 1,
        }, this.isGameWon);
      this.shuffle(images);
    } else {
      this.setState(
        {
          displayMessage: "Incorrect. Try again.",
          score: 0,
        });
      this.restartGame();
      this.shuffle(images);
    }
  }

  restartGame = () => {
    images.forEach(image => { image.clicked = "false" });
    this.setState({ score: 0 });
  }

  isGameWon = () => {
    this.checkScore();
    if (this.state.score === 12) {
      this.setState({
        displayMessage: "You won!"
      }, this.restartGame);
    }
  }

  checkScore = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score })
    }
  }

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  render() {
    return (
      <Wrapper>
        <Score>Score: {this.state.score} | Top Score: {this.state.topScore} | {this.state.displayMessage}</Score><br></br>
        {this.state.images.map(image => (
          <Card
            key={image.id}
            id={image.id}
            clicked={image.clicked}
            image={image.image}
            onClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
