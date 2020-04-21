import React from "react";
import AboutCss from "./About.css";
import { Button, Fade } from "reactstrap";


export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fadeIn: false };
    this.toggle = this.toggle.bind(this);
  }

  render() {
    return (
      <div className="About">
        <Button color="info" onClick={this.toggle}>
          Click to learn about me!
        </Button>
        <Fade in={this.state.fadeIn} onPage tag="h5" className="mt-3">
          <p>
            Hello!! My name is DocMustang a legendary pilot born to seek 
            new adventures and go where no man have never gone before. 
          </p>
          <p>
           Speed is life. Altitude is life insurance .
          </p>
        </Fade>
      </div>
    );
  }

  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn,
    });
  }
}

