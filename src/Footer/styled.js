import styled from "styled-components";

export const Footer = styled.footer`
  margin-top: 56px;
  border-top: 1px solid rgba(72, 72, 72, 0.2);
`;

export const Top = styled.div`
  padding-top: 16px;
  padding-bottom: 24px;
  display: flex;
  margin-left: -8px;
  margin-right: -8px;

  @media (min-width: 768px) {
    padding-top: 48px;
    padding-bottom: 32px;
  }

  @media (min-width: 991px) {
    padding-bottom: 40px;
  }
`;

export const Bottom = styled.div`
  padding: 16px 8px;
  border-top: 1px solid rgba(72, 72, 72, 0.08);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -8px;
  margin-right: -8px;

  @media (min-width: 768px) {
    padding-top: 34px;
    padding-bottom: 34px;
    flex-wrap: nowrap;
  }
`;

export const Logo = styled.img`margin-right: 16px;`;

export const Location = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  margin-right: -8px;
  margin-left: -8px;

  @media (min-width: 768px) {
    flex-direction: column;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const SelectWrap = styled.div`
  position: relative;
  display: flex;
  flex-basis: 50%;
  margin-left: 8px;
  margin-right: 8px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
    flex-basis: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Arrow = styled.img`
  position: absolute;
  top: 50%;
  margin-top: -4px;
  right: 8px;
`;

export const Select = styled.select`
  padding: 12px 34px 12px 8px;
  font-size: 12px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  color: #383838;
  font-family: "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  cursor: pointer;
  width: 100%;

  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 0.01px;
  text-overflow: "";
  -ms-appearance: none;
  appearance: none !important;

  &::-ms-expand {
    display: none;
  }
  @media (min-width: 768px) {
    font-size: 15px;
    padding: 14px 34px 15px 8px;
  }

  @media (min-width: 992px) {
    font-size: 18px;
    padding: 12px 34px 13px 16px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Title = styled.div`
  margin-bottom: 19px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;

  @media (min-width: 992px) {
    font-size: 15px;
    margin-bottom: 16px;
  }
`;

export const Link = styled.a`
  margin-bottom: 11px;
  font-size: 12px;
  line-height: 16px;

  color: #636363;

  @media (min-width: 992px) {
    font-size: 15px;
    line-height: 19px;
    margin-bottom: 8px;
  }
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #636363;

  @media (min-width: 992px) {
    font-size: 15px;
  }
`;

export const NavBottom = styled.div`
  padding-top: 12px;
  display: flex;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    padding-top: 0;
    width: auto;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialLink = styled.a`
  display: block;
  width: 16px;
  margin: 0 4px;

  @media (min-width: 768px) {
    margin: 0 6px;

    width: auto;
  }
`;

export const Icon = styled.img`
  display: block;
  width: 100%;
`;

export const LinkBottom = Link.extend`
  margin-right: 12px;
  margin-bottom: 0;

  @media (min-width: 768px) {
    margin-right: 16px;
    margin-bottom: 0;
  }

  @media (min-width: 992px) {
    margin-right: 16px;
    margin-bottom: 0;
  }
`;
