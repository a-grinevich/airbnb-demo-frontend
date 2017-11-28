import React from "react";
import MediaQuery from "react-responsive";
import { Filters, Row } from "./styled";
import Filter from "./Filter";
import Dates from "./Dates";
import Guests from "./Guests";
import More from "./More";

export default function() {
  return (
    <Filters>
      <div className="container">
        <Row>
          <Filter
            name="Dates"
            activeName="Check in — Check out"
            mobileTitle="When"
          >
            <Dates />
          </Filter>
          <Filter name="Guests">
            <Guests />
          </Filter>
          <MediaQuery minWidth={992}>
            <Filter name="Room type" />
            <Filter name="Price" />
            <Filter name="Instant book" />
          </MediaQuery>
          <Filter name="More filters">
            <More />
          </Filter>
        </Row>
      </div>
    </Filters>
  );
}
