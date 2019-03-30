import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Projects from "./Components/Projects";
import DetailsProject from "./Components/DetailsProject";
import About from "./Components/About";

const Routes = props => {
  return (
    <Switch>
      <Route
        exact
        path="/work/human-appeal"
        render={renderProps => {
          return (
            <Projects title="Human Appeal" image="/images/human.png">
              <DetailsProject path="human" />
            </Projects>
          );
        }}
      />
      <Route
        exact
        path="/work/muslim-hands"
        render={renderProps => {
          return (
            <Projects title="Muslim Hands" image="/images/muslim.jpg">
              <DetailsProject path="muslim" />
            </Projects>
          );
        }}
      />
      <Route
        exact
        path="/work/alchemiya"
        render={renderProps => {
          return (
            <Projects title="Alchemiya" image="/images/alchemiya.png">
              <DetailsProject path="alchemiya" />
            </Projects>
          );
        }}
      />
      <Route exact path="/about" component={About} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
