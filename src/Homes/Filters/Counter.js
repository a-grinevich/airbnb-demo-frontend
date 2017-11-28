import React from "react";
import styled from "styled-components";
import minusIcon from "./minus.svg";
import plusIcon from "./plus.svg";

const Value = styled.span`
  display: inline-block;
  margin: 0 18px;
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  font-size: 18px;
  color: #383838;
`;

const Button = styled.button`
  border: 1px solid #008489;
  box-sizing: border-box;
  border-radius: 22px;
  width: 32px;
  height: 32px;
  background: none;
  text-align: center;
  line-height: 32px;
  position: relative;
  opacity: ${props => (props.disabled ? "0.5" : "1.0")};
`;

const Counter = styled.div`
  display: flex;
  flex-direction: row;
  row-wrap: nowrap;
  justyfy-content: space-between;
  align-items: center;
`;

const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export default () => (
  <Counter>
    <Button disabled>
      <Icon src={minusIcon} alt="Minus" />
    </Button>
    <Value>0</Value>
    <Button>
      <Icon src={plusIcon} alt="Plus" />
    </Button>
  </Counter>
);
