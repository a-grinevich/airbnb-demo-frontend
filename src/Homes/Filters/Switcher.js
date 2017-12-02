import React from "react";
import styled from "styled-components";

import switcherOff from "./switcher-off.svg";
import switcherOn from "./switcher-on.svg";

const Switcher = styled.div`
  padding-right: 72px;
  position: relative;
  margin: 8px 0;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  width: 64px;
  height: 40px;
  opacity: 0;
  top: 50%;
  margin-top: -20px;
  right: 0;
`;

const Label = styled.label`
  cursor: pointer;
  display: block;

  &:before {
    content: "";
    position: absolute;
    width: 64px;
    height: 40px;
    background: url(${switcherOff}) no-repeat center;
    top: 50%;
    margin-top: -20px;
    right: 0;
  }

  ${Checkbox}:checked + &:before {
    background-image: url(${switcherOn});
  }
`;

export default class extends React.Component {
  onSwitch = switcher => {
    // this.props.onInstantChange({ instant: !this.props.instant });
  };

  onCancel = () => {
    // this.props.onInstantChange({
    //   instant: false
    // });

    this.onClose();
  };

  onClose = () => {
    // this.props.onClose("Instant book");
  };

  render() {
    return (
      <Switcher>
        <Checkbox
          id={this.props.id}
          // onClick={this.onSwitch}
          // checked={this.props.instant}
        />
        <Label htmlFor={this.props.id}>{this.props.children}</Label>
      </Switcher>
    );
  }
}
