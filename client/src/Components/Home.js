import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="home">
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
          <h1>Creative agency with a passion for digital</h1>
          <a href="#">
            <button>View our work</button>
          </a>
        </header>
      </div>
    );
  }
}

export default Home;
