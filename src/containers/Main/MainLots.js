import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { Card } from "semantic-ui-react";

import Offer from "../../components/Offer";
import LotModal from "./LotModal";

class MainLots extends Component {
  state = { selected: null };

  toggleSelected = (lotId) => {
    if (this.state.selected === lotId) {
      this.setState({ selected: null });
    } else {
      this.setState({ selected: lotId });
    }
  };

  render() {
    const { lots } = this.props;
    const { selected } = this.state;

    return (
      <Card.Group centered>
        {selected !== null && (
          <LotModal lotId={selected} closeModal={() => this.setState({ selected: null })} />
        )}
        {_.map(lots, lot => (
          <Offer
            offer={lot}
            onClick={lotId => this.toggleSelected(lotId)}
            isSelected={selected === lot.id}
          />
        ))}
      </Card.Group>
    );
  }
}

const mapStateToProps = ({ lots }) => ({ lots });

export default connect(mapStateToProps)(MainLots);
