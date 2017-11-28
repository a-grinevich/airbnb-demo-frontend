import styled from "styled-components";
import close from "./close.svg";

export const Filters = styled.div`
  background: #ffffff;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
  padding: 12px 0;
  width: 100%;
  position: fixed;
  top: 81px;
  left: 0;
  z-index: 20;
`;

export const Row = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
`;

export const Button = styled.button`
  font-family: "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  cursor: pointer;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  line-height: 18px;
  font-size: 14px;
  background: #ffffff;
  padding: 6px 16px;
  margin-right: 12px;
  white-space: nowrap;
  background-color: ${props => props.isOpen && "#008489"};
  color: ${props => props.isOpen && "#fff"};
`;

export const Dropdown = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 0;
  background-color: #fff;

  @media (min-width: 768px) {
    position: absolute;
    left: 0;
    top: 40px;

    width: auto;
    height: auto;

    background: #ffffff;
    border: 1px solid rgba(72, 72, 72, 0.2);
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
    border-radius: 4px;
    padding-top: 16px;
  }
`;

export const FilterContainer = styled.div`position: relative;`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 8px 20px 8px;
`;

export const Close = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  background-color: #fff;
  background-image: url(${close});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

export const Reset = styled.button`
  font-size: 14px;
  font-family: "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  color: #0f7276;
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

export const Cancel = styled.button`
  padding: 24px 32px;
  font-family: "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  color: #636363;
`;
export const Apply = Cancel.extend`color: #0f7276;`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: 19px;
`;
export const Content = styled.div`
  font-size: 14px;
  line-height: 16px;
`;

export const Dates = styled.div`
  width: 100%;
  padding: 25px 8px;
  background: #ffffff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

export const Check = styled.span`
  line-height: 21px;
  font-size: 18px;
  color: ${props => (props.isSelected ? "#0f7276" : "#636363")};
  border-bottom: ${props => (props.isSelected ? "1px solid #008489" : "none")};
  padding-bottom: 4px;
`;

export const Arrow = styled.img`
  width: 18px;
  height: 11px;
  display: inline-block;
  margin: 0 16px;
`;

export const Option = styled.div`
  display: table;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 23px;
`;

export const OptionCell = styled.div`
  display: table-cell;
  width: 100%;
  box-sizing: border-box;
  vertical-align: middle;
`;

export const OptionName = styled.div`
  line-height: 21px;
  font-size: 18px;
  color: #383838;

  @media screen and (min-width: 768px) {
    line-height: 23px;
    font-size: 20px;
  }
`;

export const OptionTitle = styled.div`
  line-height: 16px;
  font-size: 14px;
  color: #383838;
  margin-top: 6px;
  font-weight: 300;

  @media screen and (min-width: 768px) {
    line-height: 19px;
    font-size: 16px;
  }
`;

export const Container = styled.div`
  padding: 10px 16px 0 24px;
  min-width: 326px;
`;

export const Name = styled.div`
  font-size: 14px;
  color: #383838;
`;
