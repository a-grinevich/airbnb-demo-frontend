import styled from "styled-components";
import chevron from "./chevron.svg";

export const Next = styled.a`
  display: none;

  @media (min-width: 992px) {
    display: block;
    border-radius: 50%;
    border: none;
    position: absolute;
    right: -12px;
    top: 154px;
    z-index: 10;
    width: 40px;
    height: 40px;
    background: ;
    background: #ffffff url(${chevron}) center no-repeat;
    border: 0.5px solid rgba(72, 72, 72, 0.2);
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  }

  @media (min-width: 1200px) {
    top: 191px;
  }
`;

export const SectionTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  margin-top: 48px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 34px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: -8px;
  margin-left: -8px;
  padding-bottom: 8px;
  overflow-y: auto;
  position: relative;

  @media (min-width: 992px) {
    overflow-y: initial;
  }
`;

export const Star = styled.img`margin-right: 4px;`;

export const Rating = styled.div`white-space: nowrap;`;

export const Count = styled.span`
  font-size: 12px;
  color: #383838;
  margin-left: 4px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 8px;
`;

export const Card = styled.a`
  display: block;
  text-decoration: none;
`;

export const Title = styled.div`
  font-size: 13px;
  color: #383838;
  font-weight: 300;
  margin-bottom: 7px;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

export const Price = styled.span`font-weight: 700;`;
