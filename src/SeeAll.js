import styled from "styled-components";
import React from "react";
import arrow from "./arrow_right.svg";

const Text = styled.span`
  line-height: 24px;
  font-size: 12px;
  color: #383838;
  font-weight: normal;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

const Arrow = styled.img`margin-left: 8px;`;

const Link = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export default function() {
  return (
    <Link href="#">
      <Text>See all</Text>
      <Arrow src={arrow} alt="Arrow" />
    </Link>
  );
}
