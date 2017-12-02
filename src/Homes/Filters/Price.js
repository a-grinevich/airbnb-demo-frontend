import React from "react";
import styled from "styled-components";
import Rheostat from "rheostat";
import "rheostat/css/slider-horizontal.css";
import "./rheostat.css";
import histogram from "./histogram.svg";

const Price = styled.div`
  padding: 4px 16px;
  display: flex;
  flex-direction: column;
  width: 326px;
`;
const Title = styled.div`
  line-height: normal;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 8px;
`;

const Subtitle = Title.extend`
  font-size: 12px;
`;

const Wrapper = styled.div`
  position: relative;
  padding: 110px 16px 20px 16px;
`;
const Img = styled.img`
  position: absolute;
  left: 36px;
  top: 34px;
  width: 144px;
`;

export default class extends React.Component {
  // onValuesUpdated = sliderState => {
  //   this.props.onPricesChange({
  //     prices: {
  //       min: sliderState.values[0],
  //       max: sliderState.values[1]
  //     }
  //   });
  // };

  // onCancel = () => {
  //   this.props.onPricesChange({
  //     prices: { min: 10, max: 1000 }
  //   });

  //   this.onClose();
  // };

  // onClose = () => {
  //   this.props.onClose("Price");
  // };

  render() {
    return (
      <div>
        <Price>
          <Title>$10 — $1000+</Title>
          <Subtitle>The average nightly price is $75.</Subtitle>
          <Wrapper>
            <Img src={histogram} />
            <Rheostat
              min={10}
              max={1000}
              values={[1, 1000]}
              // onValuesUpdated={this.onValuesUpdated}
            />
          </Wrapper>
        </Price>
      </div>
    );
  }
}
