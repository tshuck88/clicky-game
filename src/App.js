import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import images from "./images.json";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images,
    score: 0,
    topScore: 0,
    displayMessage: "Click an image to begin"
  };


  render() {
    return (
      <Wrapper>
        <Score>Score: {this.state.score} | Top Score: {this.state.topScore} | {this.state.displayMessage}</Score><br></br>
        {this.state.images.map(image => (
          <Card
            key={image.id}
            image={image.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
