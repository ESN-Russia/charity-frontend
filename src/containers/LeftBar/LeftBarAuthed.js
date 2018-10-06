import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Menu, Button, Header } from "semantic-ui-react";

import LeftBarBids from "./LeftBarBids";
import { logout } from "../../actions";

const LeftBarAuthed = ({ user }) => (
  <Fragment>
    <Menu.Item>
      <Button size="small" basic inverted fluid onClick={() => logout()}>
        Logout
      </Button>
      <Header as="h3" inverted>
        Hello, {user.first_name}
      </Header>
    </Menu.Item>
    <Menu.Item>
      <LeftBarBids />
    </Menu.Item>
  </Fragment>
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(LeftBarAuthed);
