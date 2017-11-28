import styled from "styled-components";
import { Link } from "react-router-dom";

export const Image = styled.img`
  display: block;
  width: 100%;

  @media (min-width: 768px) {
    width: 96px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: -8px;
  margin-left: -8px;
  padding-bottom: 8px;
  overflow-y: auto;
`;

export const Card = styled(Link)`
  display: block;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  overflow: hidden;
  text-decoration: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.div`
  font-size: 12px;
  color: #383838;
  font-weight: 700;
  padding: 16px 12px;

  @media (min-width: 768px) {
    font-size: 17px;
    padding: 16px 24px;
  }
`;

export const Explore = styled.section``;
