import React from "react";
import { Next, SectionTitle, Row } from "../../styled";
import Card from "../../Homes/Home";

import SeeAll from "../../SeeAll";
import img01 from "./img01.png";
import img02 from "./img02.png";
import img03 from "./img03.png";

const NextLink = Next.extend`
  @media (min-width: 992px) {
    top: 82px;
  }

  @media (min-width: 1200px) {
    top: 105px;
  }
`;

export default function() {
  return (
    <section>
      <div className="container">
        <SectionTitle>
          <span>Homes</span>
          <SeeAll to="/homes" />
        </SectionTitle>
        <Row>
          <div className="col-xs-6 col-md-5 col-lg-4">
            <Card
              to="/"
              price={82}
              name="La Salentina, see, nature & relax"
              image={img01}
              description="Entire house · 9 beds"
              stats="97 · Superhost"
            />
          </div>
          <div className="col-xs-6 col-md-5 col-lg-4">
            <Card
              to="/"
              price={82}
              name="Your private 3 bedr. riad and exclusive"
              image={img02}
              description="Entrie house · 5 beds"
              stats="161 · Superhost"
            />
          </div>
          <div className="col-xs-6 col-md-5 col-lg-4">
            <Card
              to="/"
              price={200}
              name="Dreamy Tropical Tree House"
              image={img03}
              description="Entrie treehouse · 1 bed"
              stats="364 · Superhost"
            />
          </div>
          <NextLink to="/" />
        </Row>
      </div>
    </section>
  );
}
