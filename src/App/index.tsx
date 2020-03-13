import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "components/Sidebar";
import Home from "components/Home";
import View from "components/View";
import { useWindowWidth } from "hooks/useWindowWidth";
import { MOBILE_BREAKPOINT } from "../constants";

const App: React.FunctionComponent = () => {
  const width = useWindowWidth();

  return (
    <Router>
      <div className="d-flex">
        {width < MOBILE_BREAKPOINT ? (
          <Sidebar.MobileWrapper>
            <Sidebar />
          </Sidebar.MobileWrapper>
        ) : (
          <Sidebar />
        )}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:equation" component={View} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
