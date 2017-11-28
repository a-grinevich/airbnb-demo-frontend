import React from "react";
import logo from "./logo.svg";
import arrow from "./arrow.svg";
import {
  Header,
  Row,
  Logo,
  LogoImage,
  Arrow,
  Input,
  Nav,
  NavLink
} from "./styled";

export default props => (
  <Header className={props.className}>
    <div className="container">
      <Row>
        <div className="col-xs-2 col-md-1">
          <Logo to="/">
            <LogoImage src={logo} />
            <Arrow src={arrow} />
          </Logo>
        </div>
        <div className="col-xs-10 col-md-7 col-lg-5">
          <Input placeholder={props.placeholder} />
        </div>
        <Nav>
          <NavLink to="/">Become a host</NavLink>
          <NavLink to="/">Help</NavLink>
          <NavLink to="/">Sign Up</NavLink>
          <NavLink to="/">Log In</NavLink>
        </Nav>
      </Row>
    </div>
  </Header>
);
