import React from "react";

import {
  Paginator,
  Page,
  NextPage,
  CurrentPage,
  Controls,
  Count
} from "./styled";

export default function() {
  return (
    <Paginator>
      <Controls>
        <CurrentPage to="#">1</CurrentPage>
        <Page to="#">2</Page>
        <Page to="#">3</Page>
        <Page to="#">...</Page>
        <Page to="#">17</Page>
        <NextPage to="#" />
      </Controls>
      <Count>1 – 18 of 300+ Rentals</Count>
    </Paginator>
  );
}
