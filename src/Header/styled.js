import styled from "styled-components";
import searchIcon from "./search.svg";

export const Header = styled.header`
  background: #ffffff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  padding: 16px 0;
`;
export const Row = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  margin-right: -8px;
  margin-left: -8px;
  align-items: center;
`;

export const Logo = styled.a`
  position: relative;
  display: inline-block;
  padding-right: 16px;
`;

export const LogoImage = styled.img`
  display: block;
  width: 30px;
  height: 32px;
`;

export const Arrow = styled.img`
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -3px;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const Input = styled.input`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  width: 100%;
  padding: 12px 12px 12px 53px;
  color: #383838;
  font-size: 14px;
  line-height: 24px;
  background: url(${searchIcon}) no-repeat 16px center;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Link = styled.a`
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  color: #383838;
  padding: 0 8px;
  margin-right: 8px;
`;

export const Nav = styled.nav`
  display: none;

  @media (min-width: 992px) {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
  }
`;
