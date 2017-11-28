import React from "react";
import { Next, SectionTitle, Row, Image, Card, Title } from "../../styled";
import img01 from "./img01.png";
import img02 from "./img02.png";
import img03 from "./img03.png";
import img04 from "./img04.png";
import img05 from "./img05.png";
import img06 from "./img06.png";

const NextLink = Next.extend`
  @media (min-width: 992px) {
    top: 90px;
  }

  @media (min-width: 1200px) {
    top: 120px;
  }
`;

const City = Title.extend`
  font-weight: 700;
`;

export default function() {
  return (
    <section>
      <div className="container">
        <SectionTitle>Featured destinations</SectionTitle>
        <Row>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card to="/">
              <Image src={img01} />
              <City>Paris</City>
            </Card>
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card to="/">
              <Image src={img02} />
              <City>Miami</City>
            </Card>
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card to="/">
              <Image src={img03} />
              <City>Tokyo</City>
            </Card>
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card to="/">
              <Image src={img04} />
              <City>Cape town</City>
            </Card>
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card to="/">
              <Image src={img05} />
              <City>Seoul</City>
            </Card>
          </div>
          <div className="col-xs-4 col-md-3 col-lg-2">
            <Card to="/">
              <Image src={img06} />
              <City>Los Angeles</City>
            </Card>
          </div>
          <NextLink to="/" />
        </Row>
      </div>
    </section>
  );
}
