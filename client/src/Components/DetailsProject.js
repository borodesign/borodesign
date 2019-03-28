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
              Our direction with Muslim Aid was to create a effective, current
              and non-clichéd approach while still strongly linking to Islamic
              tenets. For example, publications or ads to be featured in mosques
              could not feature faces, so a creative approach would be needed
              such as cropping images or enhancing the typography of designs
              whilst still retaining it as part of an integrated campaign.
            </p>
          </div>
          <div className="projects__details--images">
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
    }
  };

  render() {
    return <div className="projects__details">{this.renderDetails()}</div>;
  }
}

export default DetailsProject;
