import React from "react";
import { connect } from "react-redux";
import { Menu, Button, Header } from "semantic-ui-react";

import { logout } from "../../actions";

const LeftBarAuthed = ({ user }) => (
  <Menu.Item>
    <Header as="h1">Hello, {user.first_name}</Header>
    <Button fluid onClick={() => logout()}>
      Logout
    </Button>
  </Menu.Item>
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(LeftBarAuthed);
