import React from "react";
import styled from "styled-components";
import check from "./check.svg";

const Container = styled.div`
  padding-left: 36px;
  display: flex;
  justify-content: space-between;
  position: relative;
  flex-grow: 1;
`;
const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  width: 24px;
  height: 24px;
  left: 0;
  top: 0;
`;

const Label = styled.label`
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    border: 1px solid rgba(72, 72, 72, 0.3);
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    top: 0;
    left: 0;
  }

  ${Checkbox}:checked + &:before {
    background: #008489 url(${check}) no-repeat center;
    border: none;
  }
`;

export default class extends React.Component {
  handleCheck = check => {
    // if (this.props.rooms.filter(x => x === check).length > 0) {
    //   this.props.onRoomsChange({
    //     rooms: this.props.rooms.filter(x => x !== check)
    //   });
    // } else {
    //   this.props.onRoomsChange({ rooms: [...this.props.rooms, check] });
    // }
  };

  onCancel = () => {
    // this.props.onRoomsChange({
    //   rooms: []
    // });
    // this.onClose();
  };

  onClose = () => {
    // this.props.onClose("Room type");
  };

  render() {
    return (
      <Container>
        <Checkbox
          id={this.props.id}
          // isChecked={
          //   this.props.rooms.includes("entire") && this.props.isOpen
          // }
        />
        <Label htmlFor={this.props.id}>{this.props.children}</Label>
      </Container>
    );
  }
}
