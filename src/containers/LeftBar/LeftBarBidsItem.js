import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Card } from "semantic-ui-react";

const LeftBarBidsItem = ({ bid, lots }) => (
  <StyledCard fluid>
    <StyledCardContent>
      <LotImageContainer>
        <LotImage src={lots[bid.charity_lot] && lots[bid.charity_lot].image_url} />
      </LotImageContainer>
      <StyledCardText>
        <BidAmount>{bid.bid} ₽</BidAmount>
        <LotName>{lots[bid.charity_lot] && lots[bid.charity_lot].name}</LotName>
      </StyledCardText>
    </StyledCardContent>
  </StyledCard>
);

const StyledCard = styled(Card)`
  text-align: left;
  padding-left: 0;
`;

const StyledCardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
`;

const LotImageContainer = styled.div`
  padding: 0.5em;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LotImage = styled.img`
  border-radius: 50%;
  max-height: 3.5em;
`;

const StyledCardText = styled.div`
  padding: 0.5em;
`;

const BidAmount = styled.p`
  padding: 0;
  margin: 0;
  font-family: Lato;
  font-weight: 700;
  font-size: 1.07142857rem;
  color: rgba(0, 0, 0, 0.85);
`;

const LotName = styled.p`
  padding: 0;
  margin: 0;
  font-family: Lato;
  color: rgba(0, 0, 0, 0.85);
  font-size: 1em;
`;

const mapStateToProps = ({ lots }) => ({ lots });

export default connect(mapStateToProps)(LeftBarBidsItem);
