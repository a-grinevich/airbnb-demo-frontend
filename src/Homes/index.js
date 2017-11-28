import React from "react";
import Cards from "./Cards";
import Filters from "./Filters";
import { Main } from "../styled";

const Content = Main.extend`padding-top: 136px;`;

export default function() {
  return (
    <div>
      <Filters />
      <Content>
        <Cards />
      </Content>
    </div>
  );
}
