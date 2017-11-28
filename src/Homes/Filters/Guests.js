import React from "react";
import {
  OptionCell,
  OptionTitle,
  OptionName,
  Option,
  Container
} from "./styled";
import Counter from "./Counter";

export default class Guests extends React.Component {
  render() {
    return (
      <Container>
        <Option>
          <OptionCell>
            <OptionName>Adults</OptionName>
          </OptionCell>
          <OptionCell>
            <Counter />
          </OptionCell>
        </Option>

        <Option>
          <OptionCell>
            <OptionName>Children</OptionName>
            <OptionTitle>Ages 2 — 12</OptionTitle>
          </OptionCell>
          <OptionCell>
            <Counter />
          </OptionCell>
        </Option>

        <Option>
          <OptionCell>
            <OptionName>Infants</OptionName>
            <OptionTitle>Under 2</OptionTitle>
          </OptionCell>
          <OptionCell>
            <Counter />
          </OptionCell>
        </Option>
      </Container>
    );
  }
}
