import React from "react";
import Home from "./Home";
import GoogleMap from "./GoogleMap";
import Paginator from "./Paginator";
import styled from "styled-components";

import { Section, Row, Prompt, MapButton } from "./styled";

import img01 from "./img01.jpg";
import img02 from "./img02.jpg";
import img03 from "./img03.jpg";
import img04 from "./img04.jpg";
import img05 from "./img05.jpg";
import img06 from "./img06.jpg";

const Card = styled(Home)`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export default function() {
  return (
    <Section>
      <div className="container">
        <Row>
          <div className="col-xs-12 col-md-6">
            <Card
              to="/homes"
              price={82}
              name="La Salentina, see, nature & relax"
              image={img01}
              description="Entire house · 9 beds"
              stats="97 · Superhost"
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <Card
              to="/homes"
              price={82}
              name="Your private 3 bedr. riad and exclusive"
              image={img02}
              description="Entrie house · 5 beds"
              stats="161 · Superhost"
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <Card
              to="/homes"
              price={200}
              name="Dreamy Tropical Tree House"
              image={img03}
              description="Entrie treehouse · 1 bed"
              stats="364 · Superhost"
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <Card
              to="/homes"
              price={110}
              name="Best location old town luxury loft"
              image={img04}
              description="Entrie apartment · 1 bed"
              stats="369 · Superhost"
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <Card
              to="/homes"
              price={83}
              name="Lussuoso. Vista incantevole."
              image={img05}
              description="Entrie apartment · 6 beds"
              stats="105 · Superhost"
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <Card
              to="/homes"
              price={72}
              name="In the historical center of Lecce"
              image={img06}
              description="Entrie house · 3 beds"
              stats="227 · Superhost"
            />
          </div>
          <Paginator />
          <Prompt>
            Enter dates to see full pricing. Additional fees apply. Taxes may be
            added.
          </Prompt>
          <GoogleMap center={{ lat: 56.83814, lng: 60.608567 }} zoom={10} />
          <MapButton />
        </Row>
      </div>
    </Section>
  );
}
