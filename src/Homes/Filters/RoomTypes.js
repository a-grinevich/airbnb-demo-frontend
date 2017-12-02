import React from "react";
import styled from "styled-components";

import entire from "./entire.svg";
import shared from "./shared.svg";
import individual from "./private.svg";
import check from "./check.svg";
import CheckboxRoomType from "./CheckboxRoomType";

const Room = styled.div`
  padding: 8px 16px 0;
  width: 326px;
`;

const Type = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.div`
  line-height: normal;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 4px;
`;

const Subtitle = Title.extend`
  font-size: 12px;
`;

const Icon = styled.img`
  width: 32px;
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
      <div>
        <Room>
          <Type>
            <CheckboxRoomType
              id="entire"
              // isChecked={
              //   this.props.rooms.includes("entire") && this.props.isOpen
              // }
            >
              <Title>Entire home</Title>
              <Subtitle>Have a place to yourself</Subtitle>
            </CheckboxRoomType>
            <Icon src={entire} />
          </Type>
          <Type>
            <CheckboxRoomType
              id="individual"
              // isChecked={
              //   this.props.rooms.includes("entire") && this.props.isOpen
              // }
            >
              <Title>Private room</Title>
              <Subtitle>
                Have your own room and share some common spaces
              </Subtitle>
            </CheckboxRoomType>
            <Icon src={individual} />
          </Type>
          <Type>
            <CheckboxRoomType
              id="shared"
              // isChecked={
              //   this.props.rooms.includes("entire") && this.props.isOpen
              // }
            >
              <Title>Shared room</Title>
              <Subtitle>Stay in a shared space, like a common room</Subtitle>
            </CheckboxRoomType>
            <Icon src={shared} />
          </Type>
        </Room>
        {/* <Footer>
          <Cancel onClick={this.onCancel}>Cancel</Cancel>
          <Apply onClick={this.onClose}>Apply</Apply>
        </Footer> */}
      </div>
    );
  }
}
