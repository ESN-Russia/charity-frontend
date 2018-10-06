import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Menu, Header } from "semantic-ui-react";

import LeftBarBidsItem from "./LeftBarBidsItem";

const LeftBarBids = ({ bids }) => (
  <Menu.Item style={{ paddingLeft: 0, paddingRight: 0 }}>
    <Header as="h4" inverted>
      Your bids:
    </Header>
    {_.map(bids, bid => (
      <LeftBarBidsItem bid={bid} />
    ))}
  </Menu.Item>
);

const mapStateToProps = ({ bids }) => ({ bids });

export default connect(mapStateToProps)(LeftBarBids);
