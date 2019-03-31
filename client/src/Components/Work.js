import React from "react";
import PropTypes from "prop-types";
import { TimelineLite, CSSPlugin, Power2 } from "gsap/TweenMax";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
const ScrollMagic = window.ScrollMagic;

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.overlay = null;
    this.myTween = null;
    this.logo = null;
    this.navList = null;
    this.header = null;
    this.heading = null;

    this.galleryTween = null;
    this.gallery = null;
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).scrollIntoView();
    this.myTween = new TimelineLite();
    this.myTween.set(".work", { autoAlpha: 0 });
    this.myTween.set(this.overlay, { height: "100%" });
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

    this.galleryTween = new TimelineLite();
    this.galleryTween.staggerFrom(
      this.gallery.children,
      0.7,
      {
        autoAlpha: 0,
        cycle: {
          x: [100, -100, 100]
        }
      },
      0.6
    );

    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
      triggerElement: this.gallery,
      triggerHook: "onCenter",
      offset: 10,
      reverse: false
    })
      .setTween(this.galleryTween)
      .addTo(controller);
  }

  openMobileNav = () => {
    console.log(this.navElement.style.display);
    if (this.navElement.style.display === "flex") {
      this.navElement.style.display = "none";
    } else {
      this.navElement.style.display = "flex";
    }
  };
  render() {
    return (
      <>
        <div className="overlay" ref={element => (this.overlay = element)} />
        <div className="work">
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
            <div id="myLinks" ref={element => (this.navElement = element)}>
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
            </div>
            <ul ref={element => (this.navList = element)} className="default">
              <Link to="/work">
                <li>Work</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/about">
                <li>Contact</li>
              </Link>
            </ul>
            {/* Mobile button icon */}
            <div className="mobileicon" onClick={this.openMobileNav}>
              <i class="fa fa-bars" />
            </div>
          </nav>
          <header ref={element => (this.header = element)}>
            <h1 ref={element => (this.heading = element)}>Our latest work</h1>
          </header>
          <section
            className="work__gallery"
            ref={element => (this.gallery = element)}
          >
            <Link to="/work/human-appeal" className="figure_grid">
              <figure className="work__gallery--human">
                <div className="work__gallery--human__image">
                  <img src="/images/human.png" />
                </div>
                <div className="work__gallery--human__description">
                  <span />
                  <h1>Human Appeal</h1>
                  <p>
                    Redesigning of the website and applying a creative touch
                  </p>
                </div>
              </figure>
            </Link>
            <Link to="/work/muslim-hands" className="figure_grid">
              <figure className="work__gallery--muslim">
                <div className="work__gallery--muslim__image">
                  <img src="/images/muslim.jpg" />
                </div>
                <div className="work__gallery--muslim__description">
                  <span />
                  <h1>Muslim Hands</h1>
                  <p>
                    Bringing the true desires and expressions of the charity to
                    life
                  </p>
                </div>
              </figure>
            </Link>
            <Link to="/work/alchemiya" className="figure_grid">
              <figure className="work__gallery--tv">
                <div className="work__gallery--tv__image">
                  <img src="/images/alchemiya.png" />
                </div>
                <div className="work__gallery--tv__description">
                  <span />
                  <h1>Alchemiya</h1>
                  <p>
                    A complete overhaul of the landing page and content displays
                  </p>
                </div>
              </figure>
            </Link>
          </section>
        </div>
      </>
    );
  }
}

export default Work;
