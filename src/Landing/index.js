import React, { Component } from "react";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Featured from "./Featured";
import Footer from "../Footer";
import { Main } from "../styled";

class Landing extends Component {
  render() {
    return (
      <div>
        <Main>
          <Explore />
          <Experiences />
          <Homes />
          <Popular />
          <Featured />
        </Main>
        <Footer />
      </div>
    );
  }
}

export default Landing;
