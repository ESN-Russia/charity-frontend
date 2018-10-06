import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Sidebar, Menu } from "semantic-ui-react";

import LeftBarNoAuth from "./LeftBarNoAuth";
import LeftBarAuthed from "./LeftBarAuthed";

const LeftBar = ({ isLoggedIn }) => (
  <Sidebar as={Menu} animation="overlay" icon="labeled" inverted vertical visible width="small">
    {isLoggedIn ? <LeftBarAuthed /> : <LeftBarNoAuth />}
  </Sidebar>
);

const mapStateToProps = ({ user }) => ({ isLoggedIn: !_.isEmpty(user) });

export default connect(mapStateToProps)(LeftBar);
