import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Projects from "./Components/Projects";
import DetailsProject from "./Components/DetailsProject";

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
      <Route exact path="/work" component={Work} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
