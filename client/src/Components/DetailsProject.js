import React, { Component } from "react";
import PropTypes from "prop-types";

class DetailsProject extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  renderDetails = () => {
    if (this.props.path === "human") {
      return (
        <>
          <div className="projects__details--text">
            <p>
              Human Appeal is a Manchester-based humanitarian NGO that has been
              in existence for over 25 years and has strong links with the
              Muslim community. The organisation's aim was to revitalise their
              brand in a way that would allow them to broaden their humanitarian
              work and appeal to more secular audiences, without alienating
              their historical supporter base.
            </p>
            <p>
              Our direction with Human Appeal was to create a effective, current
              and non-clichéd approach while still strongly linking to Islamic
              tenets. We incorporated the new logo design provided to us with
              our own design ideas
            </p>
          </div>
          <div className="projects__details--images human">
            <figure>
              <img src="/images/humanAd.png" />
            </figure>
            <figure>
              <img src="/images/humanAd2.jpg" />
            </figure>
            <figure>
              <img src="/images/human4.jpg" />
            </figure>
            <figure>
              <img src="/images/humanAd3.jpg" />
            </figure>
            <figure>
              <img src="/images/human.png" />
            </figure>
          </div>
        </>
      );
    } else if (this.props.path === "muslim") {
      return (
        <>
          <div className="projects__details--text">
            <p>
              Muslim Hands, an international aid agency and NGO, grew from this
              grass roots movement and since these first efforts, we have
              responded to countless more emergencies, as well as establishing
              long term projects such as schools, healthcare clinics and
              livelihood programmes worldwide. We worked on breathing into our
              web design the spirit of Muslim Hands and modern web design
              layouts.
            </p>
          </div>
          <div className="projects__details--images muslim">
            <figure>
              <img src="/images/muslim.jpg" />
            </figure>
            <figure>
              <img src="/images/muslimAd2.jpg" />
            </figure>
            <figure>
              <img src="/images/muslimAd3.jpg" />
            </figure>
            <figure>
              <img src="/images/muslimAd.jpg" />
            </figure>
          </div>
        </>
      );
    }
  };

  render() {
    return <div className="projects__details">{this.renderDetails()}</div>;
  }
}

export default DetailsProject;
