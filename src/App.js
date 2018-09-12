import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Main from "./containers/Main/Main";

class App extends Component {
  state = {}; // FIXME

  componentDidMount() {
    setTimeout(() => {
      document.getElementById("async_loader").style.display = "none";
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps)(App));
