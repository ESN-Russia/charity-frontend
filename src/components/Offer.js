import React, { Component } from "react";

import { Card, Image, Icon, Header, Statistic, Label, Segment } from "semantic-ui-react";

const Offer = ({ offer, onClick, isSelected }) => (
  <Card raised fluid={isSelected} onClick={() => onClick(offer.id)}>
    <Image
      src={offer.imageUrl}
      label={{
        as: "a",
        color: "red",
        content: "End in 3 days",
        ribbon: true,
      }}
    />
    <Card.Content>
      <Card.Header>{offer.name}</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content textAlign="center">
      <Statistic label="current bet" value={`${offer.baseCost} ₽`} />
    </Card.Content>
  </Card>
);

export default Offer;
