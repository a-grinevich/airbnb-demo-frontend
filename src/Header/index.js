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
  Link
} from "./styled";

export default () => {
  return (
    <Header>
      <div className="container">
        <Row>
          <div className="col-xs-2 col-md-1">
            <Logo href="#">
              <LogoImage src={logo} />
              <Arrow src={arrow} />
            </Logo>
          </div>
          <div className="col-xs-10 col-md-7 col-lg-5">
            <Input placeholder="Try “Miami”" />
          </div>
          <Nav>
            <Link href="#">Become a host</Link>
            <Link href="#">Help</Link>
            <Link href="#">Sign Up</Link>
            <Link href="#">Log In</Link>
          </Nav>
        </Row>
      </div>
    </Header>
  );
};
