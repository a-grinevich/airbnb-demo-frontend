import React from "react";
import MediaQuery from "react-responsive";
import { Filters as Container, Row } from "./styled";
import Filter from "./Filter";
import Dates from "./Dates";
import Guests from "./Guests";
import More from "./More";

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
              />
              <Filter
                id="price"
                name="Price"
                isOpen={this.state.openedFilter === "price"}
                handleOpen={this.openFilter}
                handleClose={this.closeFilter}
              />
              <Filter
                id="instant"
                name="Instant book"
                isOpen={this.state.openedFilter === "instant"}
                handleOpen={this.openFilter}
                handleClose={this.closeFilter}
              />
            </MediaQuery>
            <Filter
              id="more"
              name="More filters"
              isOpen={this.state.openedFilter === "more"}
              handleOpen={this.openFilter}
              handleClose={this.closeFilter}
            >
              <More />
            </Filter>
          </Row>
        </div>
      </Container>
    );
  }
}
