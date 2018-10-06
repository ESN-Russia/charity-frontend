import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Main from "./containers/Main/Main";
import RegisterModal from "./components/RegisterModal";

class App extends Component {
  state = {}; // FIXME

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
        <RegisterModal />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps)(App));
