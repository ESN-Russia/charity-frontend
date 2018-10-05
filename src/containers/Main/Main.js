import React, { Fragment } from "react";

import { Container, Segment, Header } from "semantic-ui-react";

import MainLots from "./MainLots";
import LeftBar from "../LeftBar/LeftBar";

const Main = () => (
  <Fragment>
    <LeftBar />

    <Segment vertical inverted color="pink">
      <Container text>
        <Header
          as="h1"
          style={{
            fontSize: "3em",
            paddingTop: "1.5em",
            paddingBottom: "0.5em",
            color: "white",
          }}
        >
          ESN Charity Auction
        </Header>
      </Container>
    </Segment>
    <Segment vertical padded="very">
      <Container>
        <MainLots />
      </Container>
    </Segment>
  </Fragment>
);

export default Main;
