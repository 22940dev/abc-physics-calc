import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "components/Sidebar";
import View from "components/View";

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <Switch>
          <Route path="/:equation" component={View} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
