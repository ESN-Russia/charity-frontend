import React, { Component, Fragment } from "react";
import { Menu, Form, Button } from "semantic-ui-react";

import { login } from "../../actions";

class LeftBarNoAuth extends Component {
  state = {
    username: "",
    password: "",
    isLoading: false,
  };

  handleLogin = async () => {
    const { username, password } = this.state;
    console.log("ASDBG", username, password, this.state);
    this.setState({ isLoading: true });
    await login(username, password);
    this.setState({ isLoading: false });
  };

  render() {
    const { username, password, isLoading } = this.state;
    return (
      <Fragment>
        <Menu.Item>
          <Form inverted>
            <Form.Input
              label="Email"
              value={username}
              onChange={(e, { value }) => this.setState({ username: value })}
            />
            <Form.Input
              label="password"
              type="password"
              value={password}
              onChange={(e, { value }) => this.setState({ password: value })}
            />
            <Form.Button
              fluid
              color="green"
              onClick={() => this.handleLogin()}
              disabled={isLoading}
            >
              Login
            </Form.Button>
          </Form>
        </Menu.Item>
        <Menu.Item>
          <Button
            size="small"
            basic
            inverted
            onClick={() => window.store.dispatch({ type: "SHOW_REGISTER" })}
          >
            I don&#39;t have an account
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button
            size="small"
            basic
            inverted
            onClick={() => window.store.dispatch({ type: "SHOW_PASSWORD_RESTORE" })}
          >
            I forgot my password
          </Button>
        </Menu.Item>
      </Fragment>
    );
  }
}

export default LeftBarNoAuth;
