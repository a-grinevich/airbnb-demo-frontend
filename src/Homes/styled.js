import styled from "styled-components";
import chevronRight from "./chevron-right.svg";
import location from "./location.svg";
import { Link } from "react-router-dom";

export const Section = styled.section`
  margin-top: 24px;
  padding-bottom: 88px;

  @media (min-width: 768px) {
    padding-bottom: 24px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: -8px;
  margin-left: -8px;

  @media (min-width: 992px) {
    padding-right: calc(33.33333333% + 6px);
  }
`;

export const Prompt = styled.div`
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #636363;
  width: 100%;
`;

export const Paginator = styled.div`
  width: 100%;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Controls = styled.div`
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #636363;
  width: 100%;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 16px;
`;

export const Page = styled(Link)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  margin-left: 8px;
  margin-right: 8px;

  color: #0f7276;
`;

export const NextPage = Page.extend`
  border: 1px solid #008489;
  background: url(${chevronRight}) 13px center no-repeat;
`;

export const CurrentPage = Page.extend`
  background: #008489;
  color: #ffffff;
`;

export const Count = styled.div`
  line-height: normal;
  font-size: 16px;
  text-align: center;
  color: #383838;
  width: 100%;
`;

export const MapButton = styled.button`
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 24px;
  right: 8px;
  background: #ffffff url(${location}) center no-repeat;
  border: 1px solid rgba(72, 72, 72, 0.16);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 20px;
  cursor: pointer;

  @media (min-width: 992px) {
    display: none;
  }
`;
