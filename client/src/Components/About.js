import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
const TimelineLite = window.TimelineLite;

class About extends Component {
  constructor(props) {
    super(props);
    this.overlay = null;
    this.myTween = null;
    this.logo = null;
    this.navList = null;
    this.header = null;
    this.heading = null;
    this.details = null;
  }
  componentDidMount() {
    ReactDOM.findDOMNode(this).scrollIntoView();
    this.myTween = new TimelineLite();
    this.myTween.set(".work", { autoAlpha: 0 });
    this.myTween.set(this.overlay, { height: "180%" });
    this.myTween.to(this.overlay, 1, {
      x: "100%",
      repeat: 1,
      yoyo: true,
      onComplete: () => {
        this.myTween.to("body", 0.01, { overflowY: "visible" });
        this.myTween.to(this.overlay, 0.1, { autoAlpha: 0 });
      }
    });
    this.myTween.to(".work", 0.1, { autoAlpha: 1 });
    this.myTween.from(this.header, 0.5, { autoAlpha: 0 });
    this.myTween.from(this.heading, 0.5, { autoAlpha: 0 }, "-=.1");
    this.myTween.staggerFrom(
      this.navList.children,
      0.5,
      {
        y: 30,
        autoAlpha: 0
      },
      0.06,
      "-=.6"
    );
    this.myTween.from(this.logo, 0.5, { autoAlpha: 0, x: -30 }, "-=.5");
    this.myTween.from(this.details, 0.5, { autoAlpha: 0, y: 50 }, "-=.4");
  }

  render() {
    return (
      <>
        <div className="overlay" ref={element => (this.overlay = element)} />
        <div className="about">
          <aside>
            <Link to="/">
              <img
                src="/images/boro.png"
                ref={element => (this.logo = element)}
              />
            </Link>
          </aside>
          <nav>
            <ul ref={element => (this.navList = element)}>
              <Link to="/work">
                <li>Work</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <a href="#">
                <li>Contact</li>
              </a>
            </ul>
          </nav>
          <header ref={element => (this.header = element)}>
            <h1 ref={element => (this.heading = element)}>Who we are</h1>
          </header>
          <section
            className="about__details"
            ref={element => (this.details = element)}
          >
            <p>
              Boro design agency is a London based web design consultancy. We
              produce effective and captivating solutions that are underpinned
              by conceptual thinking, meticulous attention to detail and
              innovative production. We specialise in the new Islamic economy
              working with startups and and charities
            </p>
          </section>
        </div>
      </>
    );
  }
}

export default About;
