import React from "react";
import MediaQuery from "react-responsive";
import { Filters as Container, Row, Overlay } from "./styled";
import Filter from "./Filter";
import MoreFilters from "./MoreFilters";
import Dates from "./Dates";
import Guests from "./Guests";
import Price from "./Price";
import RoomTypes from "./RoomTypes";
import InstantBook from "./InstantBook";

export default class Filters extends React.Component {
  state = {
    openedFilter: null
  };

  openFilter = key => {
    this.setState({ openedFilter: key });
  };

  closeFilter = () => {
    this.setState({ openedFilter: null });
  };

  render() {
    return (
      <Container>
        <div className="container">
          <Row>
            <Filter
              id="dates"
              name="Dates"
              activeName="Check in — Check out"
              mobileTitle="When"
              isOpen={this.state.openedFilter === "dates"}
              handleOpen={this.openFilter}
              handleClose={this.closeFilter}
            >
              <Dates />
            </Filter>
            <Filter
              id="guests"
              name="Guests"
              isOpen={this.state.openedFilter === "guests"}
              handleOpen={this.openFilter}
              handleClose={this.closeFilter}
            >
              <Guests />
            </Filter>
            <MediaQuery minWidth={992}>
              <Filter
                id="room"
                name="Room type"
                isOpen={this.state.openedFilter === "room"}
                handleOpen={this.openFilter}
                handleClose={this.closeFilter}
              >
                <RoomTypes />
              </Filter>
              <Filter
                id="price"
                name="Price"
                isOpen={this.state.openedFilter === "price"}
                handleOpen={this.openFilter}
                handleClose={this.closeFilter}
              >
                <Price />
              </Filter>
              <Filter
                id="instant"
                name="Instant book"
                isOpen={this.state.openedFilter === "instant"}
                handleOpen={this.openFilter}
                handleClose={this.closeFilter}
              >
                <InstantBook />
              </Filter>
            </MediaQuery>
            <MoreFilters
              id="more"
              isOpen={this.state.openedFilter === "more"}
              handleOpen={this.openFilter}
              handleClose={this.closeFilter}
            />
          </Row>
        </div>
        {this.state.openedFilter !== null && <Overlay />}
      </Container>
    );
  }
}
