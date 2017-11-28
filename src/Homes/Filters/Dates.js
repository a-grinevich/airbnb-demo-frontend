import React from "react";
import MediaQuery from "react-responsive";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./react_dates_overrides.css";
import { DayPickerRangeController } from "react-dates";
import { Dates, Check, Arrow } from "./styled";
import moment from "moment";

import arrow from "./arrow.svg";

export default class extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: "startDate",
    isOpen: false
  };

  onFocusChange = focusedInput => {
    this.setState({
      focusedInput: !focusedInput ? "startDate" : focusedInput
    });
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  render() {
    return (
      <div>
        <MediaQuery minWidth={992}>
          <DayPickerRangeController
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={this.state.focusedInput}
            numberOfMonths={2}
            isDayBlocked={day => day.isBefore(moment(), "day")}
          />
        </MediaQuery>
        <MediaQuery minWidth={768} maxWidth={992}>
          <DayPickerRangeController
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={this.state.focusedInput}
            numberOfMonths={1}
            isDayBlocked={day => day.isBefore(moment(), "day")}
          />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <Dates>
            <Check isSelected>Check-in</Check>
            <Arrow src={arrow} />
            <Check>Check-out</Check>
          </Dates>
          <DayPickerRangeController
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={this.state.focusedInput}
            numberOfMonths={2}
            orientation="vertical"
            isDayBlocked={day => day.isBefore(moment(), "day")}
          />
        </MediaQuery>
      </div>
    );
  }
}
