import React from "react";
import styled from "styled-components";

import switcherOff from "./switcher-off.svg";
import switcherOn from "./switcher-on.svg";
import Switcher from "./Switcher";

const Instant = styled.div`
  padding: 0px 16px;
  width: 326px;
`;

const Title = styled.div`
  line-height: normal;
  font-size: 18px;
  margin-bottom: 4px;
`;

const Subtitle = styled.div`
  line-height: normal;
  font-size: 14px;
  font-weight: 300;
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
      <Instant>
        <Switcher id="instant">
          <Title>Instant Book</Title>
          <Subtitle>
            Listings you can book without waiting for host approval.
          </Subtitle>
        </Switcher>
        {/* <Footer>
          <Cancel onClick={this.onCancel}>Cancel</Cancel>
          <Apply onClick={this.onClose}>Apply</Apply>
        </Footer> */}
      </Instant>
    );
  }
}
