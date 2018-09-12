import React from "react";
import _ from "lodash";
import styled from "styled-components";

import { Container, Segment, Header, Image, Grid, Card } from "semantic-ui-react";

import MainLots from "./MainLots";

const Main = () => (
  <Segment>
    <Container>
      <Header as="h1">ESN Charity Auction</Header>
      <MainLots />
    </Container>
  </Segment>
);

export default Main;
