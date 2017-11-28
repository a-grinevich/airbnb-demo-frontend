import React from "react";
import {
  Rating,
  Count,
  Star,
  Image,
  Card,
  Price,
  Title as Description
} from "../styled";
import star from "../star.svg";

const Name = Description.extend`
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default props => (
  <Card className={props.className} to={props.to}>
    <Image src={props.image} />
    <Name>
      <Price>${props.price}</Price>&nbsp;{props.name}
    </Name>
    <Description>{props.description}</Description>
    <Rating>
      <Star src={star} />
      <Star src={star} />
      <Star src={star} />
      <Star src={star} />
      <Star src={star} />
      <Count>{props.stats}</Count>
    </Rating>
  </Card>
);
