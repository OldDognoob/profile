import React from "react";
import AboutCss from "./About.css";
import { Button, Fade } from "reactstrap";
import PropTypes from "prop-types";

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
            Hello!! My name is Dimos Christidis a future Front end developer(I
            hope) but currently a magic student of Lambda School. At the moment
            I m passing through the most difficult part of the school "THE
            LABS"!!!!
          </p>
          <p>
            I m friendly with lots of humor and I m trying to fill my life with
            plenty of hobbies. I enjoy watching movies except(horror!!), playing
            video games, going ou to the sea and enjoying my spare time with
            close friends.
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

Fade.propTypes = {
  in: PropTypes.bool,

  mountOnEnter: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
  appear: PropTypes.bool,
  enter: PropTypes.bool,
  exit: PropTypes.bool,
  timeout: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      enter: PropTypes.number,
      exit: PropTypes.number,
    }).isRequired,
  ]),
  addEndListener: PropTypes.func,
  onEnter: PropTypes.func,
  onEntering: PropTypes.func,
  onEntered: PropTypes.func,
  onExit: PropTypes.func,
  onExiting: PropTypes.func,
  onExited: PropTypes.func,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),

  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  baseClass: PropTypes.string,

  baseClassActive: PropTypes.string,

  className: PropTypes.string,
  cssModule: PropTypes.object,
};
