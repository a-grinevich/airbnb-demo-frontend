import React from "react";
import styled from "styled-components";
import minusIcon from "./minus.svg";
import plusIcon from "./plus.svg";

const Value = styled.span`
  display: inline-block;
  width: 50px;
  text-align: center;
  font-size: 18px;
  font-weight: 300;
`;

const Button = styled.button`
  cursor: pointer;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  position: relative;
  background: none;
  border: none;

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

const Counter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 18px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.div`
  flex-grow: 1;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export default class extends React.Component {
  onPlusClick = () => {
    this.props.count(this.props.id, this.props.value + 1);
  };

  onMinusClick = () => {
    if (this.props.value > 0) {
      this.props.count(this.props.id, this.props.value - 1);
    }
  };
  render() {
    return (
      <Counter>
        <Title>{this.props.children}</Title>
        <Controls>
          <Button onClick={this.onMinusClick} disabled={this.props.value === 0}>
            <Icon src={minusIcon} alt="Minus" />
          </Button>
          <Value>{this.props.value}</Value>
          <Button onClick={this.onPlusClick}>
            <Icon src={plusIcon} alt="Plus" />
          </Button>
        </Controls>
      </Counter>
    );
  }
}
