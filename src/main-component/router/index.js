import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../HomePage/index";
import Scrollbar from "../../components/scrollbar";
import Homepage2 from "../HomePage2/index";
import Homepage3 from "../HomePage3/index";

const AllRoute = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/home" component={Homepage} />
          <Route path="/home2" component={Homepage2} />
          <Route path="/home3" component={Homepage3} />
        </Switch>
        <Scrollbar />
      </Router>
    </div>
  );
};

export default AllRoute;
