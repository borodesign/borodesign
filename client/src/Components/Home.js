import React, { Component } from "react";
import { Link } from "react-router-dom";
const gsap = window.gsap;
const TimelineLite = window.TimelineLite;
const Power2 = window.Power2;
const ScrollMagic = window.ScrollMagic;

class Home extends Component {
  constructor(props) {
    super(props);
    this.myTween = null;
    this.descTween = null;

    this.header = null;
    this.heading = null;
    this.cta = null;
    this.navList = null;
    this.logo = null;

    this.description = null;
    this.descHeading = null;
    this.descText = null;
  }
  componentDidMount() {
    console.log(window);
    this.myTween = new TimelineLite();
    this.myTween.from(this.header, 2, {
      height: "100vh",
      scale: 1.3,
      delay: 0.9,
      ease: Power2.easeOut,
      onComplete: () => {
        this.myTween.to("body", 0.01, { overflowY: "visible" });
      }
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

    this.descTween = new TimelineLite();
    this.descTween.from(this.descHeading, 1, {
      x: -150,
      autoAlpha: 0,
      ease: Power2.easeOut
    });
    this.descTween.from(
      this.descText,
      1,
      { x: 150, autoAlpha: 0, ease: Power2.easeOut },
      "-=.7"
    );

    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
      triggerElement: ".home__description",
      triggerHook: "onCenter",
      duration: "100%",
      offset: 50
    })
      .setTween(this.descTween)
      .addTo(controller);
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
        <section className="home__description">
          <h1 ref={element => (this.descHeading = element)}>
            A full service digital agency with a{" "}
            <span className="emp">difference</span>
          </h1>
          <div id="divider" />
          <p ref={element => (this.descText = element)}>
            <span
              style={{
                color: "var(--header-background)",
                fontSize: "4rem",
                fontWeight: "700",
                marginRight: ".2rem"
              }}
            >
              I
            </span>t’s our belief that deeper, more diverse insights lead to
            better work. So we are taking collaboration to the next level. We
            bring as many perspectives to the table as possible - in lightning
            fast time - to power big ideas for ambitious brands.
          </p>
        </section>
      </div>
    );
  }
}

export default Home;
