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
} from "../styled";
import SeeAll from "../SeeAll";
import star from "../star.svg";
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

const Name = Title.extend`
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function() {
  return (
    <section>
      <div className="container">
        <SectionTitle>
          <span>Homes</span>
          <SeeAll />
        </SectionTitle>
        <Row>
          <div className="col-xs-6 col-md-5 col-lg-4">
            <Card href="#">
              <Image src={img01} />
              <Name>
                <Price>$82</Price>&nbsp;La Salentina, see, nature & relax
              </Name>
              <Title>Entire house · 9 beds</Title>
              <Rating>
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Count>97 · Superhost</Count>
              </Rating>
            </Card>
          </div>
          <div className="col-xs-6 col-md-5 col-lg-4">
            <Card href="#">
              <Image src={img02} />
              <Name>
                <Price>$82</Price>&nbsp;Your private 3 bedr.riad and exclusive
              </Name>
              <Title>Entire house · 5 beds</Title>
              <Rating>
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Count>161 · Superhost</Count>
              </Rating>
            </Card>
          </div>
          <div className="col-xs-6 col-md-5 col-lg-4">
            <Card href="#">
              <Image src={img03} />
              <Name>
                <Price>$200</Price>&nbsp;Dreamy Tropical Tree House
              </Name>
              <Title>Entire treehouse · 1 bed</Title>
              <Rating>
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Count>164 · Superhost</Count>
              </Rating>
            </Card>
          </div>
          <NextLink href="#" />
        </Row>
      </div>
    </section>
  );
}
