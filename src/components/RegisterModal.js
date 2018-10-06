import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Icon, Header, Form, Button, Grid, Divider } from "semantic-ui-react";

import { register, resetPassword } from "../actions";

class RegisterModal extends Component {
  state = {
    username: "",
    name: "",

    show: "step1",
    loading: false,
  };

  handleClose = () => {
    window.store.dispatch({ type: "HIDE_REGISTER_MODAL" });
    this.setState({ show: "step1" });
  };

  openRegister = () => {
    window.store.dispatch({ type: "SHOW_REGISTER" });
    this.setState({ show: "step1" });
  };

  openPasswordRestore = () => {
    window.store.dispatch({ type: "SHOW_PASSWORD_RESTORE" });
    this.setState({ show: "step1" });
  };

  handleRegister = async () => {
    this.setState({ loading: true });

    const { username, name } = this.state;
    await register(username, name);

    this.setState({ loading: false, show: "step2" });
  };

  handleResetPassword = async () => {
    this.setState({ loading: true });

    const { username } = this.state;
    const res = await resetPassword(username);

    if (res.data.status === "ok") {
      this.setState({ loading: false, show: "step2" });
    } else {
      this.setState({ loading: false, show: "step3" });
    }
  };

  render() {
    const {
      username, name, loading, show,
    } = this.state;
    const { registerModal } = this.props;

    return (
      <Modal
        open={registerModal}
        basic
        onClose={() => this.handleClose()}
        size="fullscreen"
        closeIcon={
          <Icon.Group style={{ position: "absolute", right: "5em" }}>
            <Icon name="close" size="huge" floated="right" />
          </Icon.Group>
        }
      >
        <Grid centered>
          <Grid.Column width={5}>
            {registerModal === "register" &&
              show === "step1" && (
                <Grid.Row>
                  <Header as="h1" inverted>
                    Hi! Tell us your email and how can we call you
                  </Header>
                  <Form inverted>
                    <Form.Input
                      disabled={loading}
                      loading={loading}
                      value={username}
                      label="Email"
                      onChange={(e, { value }) => this.setState({ username: value })}
                    />
                    <Form.Input
                      disabled={loading}
                      loading={loading}
                      value={name}
                      label="Name"
                      onChange={(e, { value }) => this.setState({ name: value })}
                    />
                    <Form.Button
                      fluid
                      size="big"
                      disabled={loading}
                      color="green"
                      onClick={() => this.handleRegister()}
                    >
                      Register
                    </Form.Button>
                    <Divider />
                    <Form.Button
                      disabled={loading}
                      fluid
                      size="small"
                      onClick={() => this.openPasswordRestore()}
                    >
                      I&#39;ve already registered but forgot password
                    </Form.Button>
                  </Form>
                </Grid.Row>
              )}

            {show === "step2" && (
              <Grid.Row>
                <Header as="h1" inverted>
                  Awesome! Check out your email, we&#39;ve sent you your password
                </Header>
                <Button fluid color="green" onClick={() => this.handleClose()}>
                  OK!
                </Button>
              </Grid.Row>
            )}

            {registerModal === "password_restore" &&
              show === "step1" && (
                <Grid.Row>
                  <Header as="h1" inverted>
                    Tell us your email and we will reset your password
                  </Header>
                  <Form inverted>
                    <Form.Input
                      disabled={loading}
                      value={username}
                      label="Email"
                      onChange={(e, { value }) => this.setState({ username: value })}
                    />
                    <Form.Button
                      disabled={loading}
                      fluid
                      size="big"
                      color="green"
                      onClick={() => this.handleResetPassword()}
                    >
                      Restore password
                    </Form.Button>
                  </Form>
                </Grid.Row>
              )}

            {registerModal === "password_restore" &&
              show === "step3" && (
                <Grid.Row>
                  <Header as="h1" inverted>
                    Hey, we can not find your account :(
                  </Header>
                  <Header as="h3" inverted>
                    But don&#39;t worry, you still can
                  </Header>
                  <Button fluid onClick={() => this.openRegister()}>
                    Create an account
                  </Button>
                  <Divider horizontal inverted>
                    OR
                  </Divider>
                  <Button fluid onClick={() => this.openPasswordRestore()}>
                    Try another email
                  </Button>
                </Grid.Row>
              )}
          </Grid.Column>
        </Grid>
      </Modal>
    );
  }
}

const mapStateToProps = ({ registerModal }) => ({ registerModal });

export default connect(mapStateToProps)(RegisterModal);
