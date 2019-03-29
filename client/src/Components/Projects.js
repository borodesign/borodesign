import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Power2 = window.Power2;
const TimelineLite = window.TimelineLite;
const ScrollMagic = window.ScrollMagic;
const TweenMax = window.TweenMax;

class Projects extends Component {
  constructor(props) {
    super(props);
    this.heading = null;
    this.myTween1 = null;
    this.myTween2 = null;
    this.myTween3 = null;
    this.triggerHeader = null;
    this.overlay = null;
    this.logo = null;
  }

  componentDidMount() {
    this.myTween1 = new TimelineLite();
    this.myTween1.set(".projects", { autoAlpha: 0 });
    this.myTween1.set(this.overlay, { height: "100%" });
    this.myTween1.to(this.overlay, 1, {
      x: "100%",
      repeat: 1,
      yoyo: true,
      onComplete: () => {
        this.myTween1.to("body", 0.01, { overflowY: "visible" });
        this.myTween1.to(this.overlay, 0.1, { autoAlpha: 0 });
      }
    });
    this.myTween1.to(".projects", 0.1, { autoAlpha: 1 });
    this.myTween1.from(this.heading, 1, {
      y: 150,
      autoAlpha: 0,
      delay: 0.1
    });
    this.myTween1.from(this.logo, 0.5, { autoAlpha: 0, x: -30 }, "-=.5");
    this.myTween1.staggerFrom(
      this.navList.children,
      0.5,
      {
        y: 30,
        autoAlpha: 0
      },
      0.06,
      "-=.7"
    );

    this.myTween2 = new TimelineLite().add([
      TweenMax.set(this.heading, { y: 0 }),
      TweenMax.to(".bg-image", 1.5, { scale: 1.5, ease: Power2.ease }),
      TweenMax.to(this.heading, 1, { y: 300, ease: Power2.ease })
    ]);

    this.myTween3 = new TimelineLite().add([
      TweenMax.staggerFrom(
        ".projects__details--text p",
        1,
        { x: -40, autoAlpha: 0 },
        0.1
      ),
      TweenMax.staggerFrom(
        ".projects__details--images figure",
        0.6,
        {
          scale: 0,
          autoAlpha: 0,
          delay: 0.6
        },
        0.09
      )
    ]);

    const controller = new ScrollMagic.Controller();

    const scene1 = new ScrollMagic.Scene({
      triggerElement: this.triggerHeader,
      triggerHook: "onLeave",
      duration: "100%"
    })
      .setTween(this.myTween2)
      .addTo(controller);

    const scene2 = new ScrollMagic.Scene({
      triggerElement: ".projects__details",
      triggerHook: "onCenter",
      offset: 50
    })
      .setTween(this.myTween3)
      .addTo(controller);
  }

  render() {
    return (
      <>
        <div className="overlay" ref={element => (this.overlay = element)} />
        <div className="projects">
          <header ref={element => (this.triggerHeader = element)}>
            <div
              className="bg-image"
              style={{
                background: `linear-gradient(
              rgba(51, 0, 153, 0.6),
              rgba(51, 0, 153, 0.3)
            ), url(${this.props.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top"
              }}
            />
            <aside>
              <Link to="/work">
                <div className="back" ref={element => (this.logo = element)}>
                  <img src="/images/right-arrow.svg" />
                </div>
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
                  <li>Contact</li>
                </a>
              </ul>
            </nav>
            <main className="" ref={element => (this.header = element)}>
              <h1 ref={element => (this.heading = element)}>
                {this.props.title}
              </h1>
            </main>
          </header>
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Projects;
