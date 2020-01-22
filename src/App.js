import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import images from "./images.json";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images
  };

  removeimage = id => {
    // Filter this.state.images for images with an id not equal to the id being removed
    const images = this.state.images.filter(image => image.id !== id);
    // Set this.state.images equal to the new images array
    this.setState({ images });
  };

  // Map over this.state.images and render a imageCard component for each image object
  render() {
    return (
      <Wrapper>
        <Score>images List</Score>
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
