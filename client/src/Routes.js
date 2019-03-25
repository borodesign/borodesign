import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Work from "./Components/Work";

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/work" component={Work} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
