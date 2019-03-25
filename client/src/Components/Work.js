import React from "react";
import PropTypes from "prop-types";
import { TimelineLite, CSSPlugin, Power2 } from "gsap/TweenMax";

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.overlay = null;
    this.myTween = null;
  }
  componentDidMount() {
    this.myTween = new TimelineLite();
    this.myTween.to(this.overlay, 1, {
      x: "100%",
      repeat: 1,
      yoyo: true,
      onComplete: () => {
        this.myTween.to(this.overlay, 0.1, { autoAlpha: 0 });
      }
    });
  }
  render() {
    return (
      <>
        <div className="overlay" ref={element => (this.overlay = element)} />
        <div style={{ height: "100vh" }} />
      </>
    );
  }
}

export default Work;
