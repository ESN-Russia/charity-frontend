import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import moment from "moment";

import { Button, Header, Icon, Modal, Image, Grid, Input, Segment } from "semantic-ui-react";

class LotModal extends Component {
  state = {};

  render() {
    const { lot, closeModal } = this.props;

    return (
      <Modal open basic size="small" centered={false}>
        <Modal.Content>
          <Button
            color="white"
            inverted
            onClick={() => closeModal()}
            size="large"
            style={{ marginBottom: 40 }}
          >
            <Icon name="left arrow" /> Back
          </Button>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={6}>
                <Image src={lot.imageUrl} />
              </Grid.Column>
              <Grid.Column width={10}>
                <Header
                  content={lot.name}
                  style={{ color: "white", fontSize: "3em", marginBottom: 0 }}
                />
                <Header
                  content={`${lot.author}  ||  ends ${moment(lot.ends).fromNow()}`}
                  style={{
                    marginTop: -2,
                    marginBottom: 20,
                    color: "#bbb",
                    fontSize: "1.2em",
                  }}
                />
                <p style={{ fontSize: "1.5em" }}>{lot.description}</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Segment inverted padded style={{ marginTop: 40 }}>
            <Header as="h1" style={{ color: "white" }}>
              <span style={{ fontWeight: 400 }}>Current bet:</span> {lot.baseCost} ₽
            </Header>
            <Input
              fluid
              inverted
              size="huge"
              action={{
                color: "green",
                labelPosition: "left",
                icon: "rub",
                content: "Make your bet",
              }}
              defaultValue={lot.baseCost + 100}
            />
          </Segment>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = ({ lots }, { lotId }) => ({
  lot: _.find(lots, { id: lotId }),
});

export default connect(mapStateToProps)(LotModal);
