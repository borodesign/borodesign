import React, { Component } from "react";
import { TimelineLite, CSSPlugin, Power2 } from "gsap/TweenMax";

class Home extends Component {
  constructor(props) {
    super(props);
    this.myTween = null;

    this.overlay = null;
    this.heading = null;
  }
  componentDidMount() {
    this.myTween = new TimelineLite();
    this.myTween.to(this.overlay, 3, {
      scaleX: 0.86,
      scaleY: 0.8,
      width: "106%",
      height: "92vh",
      delay: 0.9,
      ease: Power2.easeInOut
    });
    this.myTween.to(this.overlay, 0.01, { autoAlpha: 0 }, "-=.9");
  }

  render() {
    return (
      <div className="home">
        <div ref={element => (this.overlay = element)} className="overlay" />
        <aside>
          <img src="/images/boro.png" alt="" />
        </aside>
        <nav>
          <ul>
            <a href="#">
              <li>Work</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Careers</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
          </ul>
        </nav>
        <header>
          <h1 ref={element => (this.heading = element)}>
            Digital agency with a passion for creativity
          </h1>
          <a href="#">
            <button>View our work</button>
          </a>
        </header>
      </div>
    );
  }
}

export default Home;
