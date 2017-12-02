import React from "react";
import { OptionTitle, OptionName, Container } from "./styled";
import Counter from "./Counter";

export default class extends React.Component {
  state = {
    adults: 0,
    children: 0,
    infants: 0
  };

  onCount = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    return (
      <Container>
        <Counter value={this.state.adults} id="adults" count={this.onCount}>
          <OptionName>Adults</OptionName>
        </Counter>
        <Counter value={this.state.children} id="children" count={this.onCount}>
          <OptionName>Children</OptionName>
          <OptionTitle>Ages 2 — 12</OptionTitle>
        </Counter>
        <Counter value={this.state.infants} id="infants" count={this.onCount}>
          <OptionName>Infants</OptionName>
          <OptionTitle>Under 2</OptionTitle>
        </Counter>
      </Container>
    );
  }
}
