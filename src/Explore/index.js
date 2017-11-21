import React from "react";
import { Explore, Row, Card, Image, Title } from "./styled";
import { SectionTitle } from "../styled";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";

export default function() {
  return (
    <Explore>
      <div className="container">
        <SectionTitle>Explore Airbnb</SectionTitle>
        <Row>
          <div className="col-xs-6 col-md-5 col-lg-4">
            <Card href="#">
              <Image src={img1} alt="Homes" />
              <Title>Homes</Title>
            </Card>
          </div>
          <div className="col-xs-6 col-md-5 col-lg-4">
            <Card href="#">
              <Image src={img2} alt="Homes" />
              <Title>Experiences</Title>
            </Card>
          </div>
          <div className="col-xs-6 col-md-5 col-lg-4">
            <Card href="#">
              <Image src={img3} alt="Homes" />
              <Title>Restaurants</Title>
            </Card>
          </div>
        </Row>
      </div>
    </Explore>
  );
}
