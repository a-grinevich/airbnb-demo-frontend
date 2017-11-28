import React from "react";
import {
  OptionCell,
  OptionTitle,
  OptionName,
  Option,
  Container
} from "./styled";
import Counter from "./Counter";

export default class More extends React.Component {
  render() {
    return (
      <Container>
        <Option>
          <OptionCell>
            <OptionTitle>Bedrooms</OptionTitle>
          </OptionCell>
          <OptionCell>
            <Counter />
          </OptionCell>
        </Option>

        <Option>
          <OptionCell>
            <OptionTitle>Beds</OptionTitle>
          </OptionCell>
          <OptionCell>
            <Counter />
          </OptionCell>
        </Option>

        <Option>
          <OptionCell>
            <OptionTitle>Bathrooms</OptionTitle>
          </OptionCell>
          <OptionCell>
            <Counter />
          </OptionCell>
        </Option>
      </Container>
    );
  }
}
