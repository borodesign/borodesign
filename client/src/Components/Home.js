import React, { Component } from "react";
import { TimelineLite, CSSPlugin, Power2 } from "gsap/TweenMax";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.myTween = null;

    this.header = null;
    this.heading = null;
    this.cta = null;
    this.navList = null;
    this.logo = null;
  }
  componentDidMount() {
    this.myTween = new TimelineLite();
    this.myTween.from(this.header, 2, {
      height: "100vh",
      scale: 1.3,
      delay: 0.9,
      ease: Power2.easeOut
    });
    this.myTween.from(this.heading, 1, { autoAlpha: 0, y: 30 }, "-=.8");
    this.myTween.from(this.cta, 1, { autoAlpha: 0, y: -10 }, "+=.08");
    this.myTween.staggerFrom(
      this.navList.children,
      0.5,
      {
        y: 30,
        autoAlpha: 0
      },
      0.06,
      "-=1.5"
    );
    this.myTween.from(this.logo, 0.5, { autoAlpha: 0, x: -30 }, "-=2");
  }

  render() {
    return (
      <div className="home">
        <aside>
          <Link to="/">
            <img
              src="/images/boro.png"
              alt=""
              ref={element => (this.logo = element)}
            />
          </Link>
        </aside>
        <nav>
          <ul ref={element => (this.navList = element)}>
            <Link to="/work">
              <li>Work</li>
            </Link>
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
        <header ref={element => (this.header = element)}>
          <h1 ref={element => (this.heading = element)}>
            Digital agency with a passion for creativity
          </h1>
          <Link to="/work">
            <button ref={element => (this.cta = element)}>View our work</button>
          </Link>
        </header>
      </div>
    );
  }
}

export default Home;
