import React from "react";
import { Next, SectionTitle, Row, Image, Card } from "../styled";
import { Category, Title, Price } from "./styled";
import SeeAll from "../SeeAll";
import img01 from "./img01.png";
import img02 from "./img04.png";
import img03 from "./img03.png";
import img04 from "./img02.png";

const NextLink = Next.extend`
  @media (min-width: 992px) {
    top: 62px;
  }

  @media (min-width: 1200px) {
    top: 80px;
  }
`;

export default function() {
  return (
    <section>
      <div className="container">
        <SectionTitle>
          <span>Popular reservations around the world</span>
          <SeeAll />
        </SectionTitle>
        <Row>
          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card href="#">
              <Image src={img01} />
              <Category>Speakeasy</Category>
              <Title>Chumley's</Title>
              <Price>About $60 per person</Price>
            </Card>
          </div>
          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card href="#">
              <Image src={img02} />
              <Category>Korean gastropub</Category>
              <Title>Hanjan</Title>
              <Price>About $50 per person</Price>
            </Card>
          </div>
          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card href="#">
              <Image src={img03} />
              <Category>German American</Category>
              <Title>Prime Meats</Title>
              <Price>About $55 per person</Price>
            </Card>
          </div>
          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card href="#">
              <Image src={img04} />
              <Category>Fine seafood</Category>
              <Title>Seaprice</Title>
              <Price>About $70 per person</Price>
            </Card>
          </div>
          <NextLink href="#" />
        </Row>
      </div>
    </section>
  );
}
