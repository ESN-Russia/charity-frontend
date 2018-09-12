import React, { Component } from "react";
import moment from "moment";

import { Card, Image, Statistic } from "semantic-ui-react";

const Offer = ({ offer, onClick }) => (
  <Card raised onClick={() => onClick(offer.id)}>
    <Image
      src={offer.imageUrl}
      label={{
        as: "a",
        color: "red",
        content: `Ends ${moment(offer.ends).fromNow()}`,
        ribbon: true,
      }}
    />
    <Card.Content>
      <Card.Header>{offer.name}</Card.Header>
      <Card.Meta>
        <span className="date">by {offer.author}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content textAlign="center">
      <Statistic label="current bet" value={`${offer.baseCost} ₽`} />
    </Card.Content>
  </Card>
);

export default Offer;
