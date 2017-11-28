import React from "react";
import {
  Next,
  SectionTitle,
  Row,
  Rating,
  Count,
  Star,
  Image,
  Card,
  Price,
  Title
} from "../../styled";
import SeeAll from "../../SeeAll";

import star from "../../star.svg";
import img1 from "./img01.png";
import img2 from "./img02.png";
import img3 from "./img03.png";
import img4 from "./img04.png";

export default function() {
  return (
    <section>
      <div className="container">
        <SectionTitle>
          <span>Experiences</span>
          <SeeAll to="/" />
        </SectionTitle>
        <Row>
          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card to="/">
              <Image src={img4} />
              <Title>
                <Price>$29</Price>&nbsp;Forest theraphy
              </Title>
              <Rating>
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Count>44 reviews</Count>
              </Rating>
            </Card>
          </div>
          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card to="/">
              <Image src={img3} />
              <Title>
                <Price>$69</Price>&nbsp;Whale watching
              </Title>
              <Rating>
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Count>46 reviews</Count>
              </Rating>
            </Card>
          </div>
          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card to="/">
              <Image src={img2} />
              <Title>
                <Price>$69</Price>&nbsp;Table Mountain Summit, Cable Car Down
              </Title>
              <Rating>
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Count>44 reviews</Count>
              </Rating>
            </Card>
          </div>
          <div className="col-xs-6 col-md-4 col-lg-3">
            <Card to="/">
              <Image src={img1} />
              <Title>
                <Price>$50</Price>&nbsp;Salsa Night
              </Title>
              <Rating>
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Count>44 reviews</Count>
              </Rating>
            </Card>
          </div>
          <Next to="/" />
        </Row>
      </div>
    </section>
  );
}
