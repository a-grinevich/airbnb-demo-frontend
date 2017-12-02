import React from "react";
import styled from "styled-components";

import {
  Button,
  FilterContainer,
  Header,
  Close,
  Reset,
  Cancel as BaseCancel,
  Apply as BaseApply,
  Name
} from "./styled";

import MediaQuery from "react-responsive";
import Counter from "./Counter";
import Switcher from "./Switcher";
import Checkbox from "./Checkbox";
import { Link as BaseLink } from "react-router-dom";
import arrow from "./arrow-down.svg";

const Dropdown = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0px;
  top: 138px;
  z-index: 100;
`;

const Content = styled.div`
  background: #ffffff;
  overflow-y: auto;
  height: 100%;
  padding-right: 24px;
  width: 100%;

  @media (min-width: 992px) {
    width: calc(66.66666666% + 12px);
  }
`;

const Section = styled.div`
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
  padding-top: 23px;
  padding-bottom: 33px;
`;
const Title = styled.div`
  font-size: 20px;
  line-height: normal;
  margin-bottom: 24px;
`;
const Container = styled.div.attrs({ className: "container" })`
  height: 100%;
`;

const SwitchTitle = styled.div`
  line-height: normal;
  font-size: 18px;
  margin-bottom: 4px;
`;

const OptionTitle = styled.div`
  line-height: 18px;
  font-size: 14px;
  color: #383838;
  font-weight: 300;

  @media screen and (min-width: 768px) {
    line-height: 30px;
    font-size: 16px;
  }
`;
const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Subtitle = styled.div`
  line-height: normal;
  font-size: 14px;
  font-weight: 300;
`;

const Link = styled(BaseLink)`
  line-height: normal;
  font-size: 16px;
  color: #0f7276;
  font-weight: 300;
  margin-top: 4px;
  display: inline-block;

  &:hover {
  }
`;

const Text = styled.span`
  line-height: 24px;
  font-size: 16px;
  color: #0f7276;
  font-weight: normal;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

const Arrow = styled.img`
  margin-left: 8px;
`;

const SeeAll = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
`;
const Rooms = styled.div`
  width: 358px;
`;
const More = styled.div`
  width: 390px;
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  justify-content: flex-end;
  padding: 32px 0;
`;
const Apply = styled(BaseApply)`
  line-height: normal;
  font-size: 18px;

  color: #ffffff;
  background: #008489;
  border-radius: 4px;
  padding: 12px 28px;
`;
const Cancel = styled(BaseCancel)`
  line-height: normal;
  font-size: 18px;

  color: ##383838;
  border-radius: 4px;
  padding: 12px 16px;
`;

export default class extends React.Component {
  state = {
    bedrooms: 0,
    beds: 0,
    bathrooms: 0
  };

  onCount = (key, value) => {
    this.setState({ [key]: value });
  };

  toggleOpen = () => {
    if (!this.props.isOpen) {
      this.props.handleOpen(this.props.id);
    } else {
      this.props.handleClose();
    }
  };

  onClose = () => {
    this.props.handleClose();
  };

  render() {
    return (
      <FilterContainer className={this.props.className}>
        <Button onClick={this.toggleOpen} isOpen={this.props.isOpen}>
          More filters
        </Button>
        {this.props.isOpen && (
          <Dropdown>
            <Container>
              <Content>
                <MediaQuery maxWidth={767}>
                  <Header>
                    <Close onClick={this.onClose} />
                    <Name>More filters</Name>
                    <Reset>Reset</Reset>
                  </Header>
                </MediaQuery>
                <Section>
                  <Rooms>
                    <Title>Rooms and beds</Title>
                    <Counter
                      value={this.state.bedrooms}
                      id="bedrooms"
                      count={this.onCount}
                    >
                      <OptionTitle>Bedrooms</OptionTitle>
                    </Counter>
                    <Counter
                      value={this.state.beds}
                      id="beds"
                      count={this.onCount}
                    >
                      <OptionTitle>Beds</OptionTitle>
                    </Counter>
                    <Counter
                      value={this.state.bathrooms}
                      id="bathrooms"
                      count={this.onCount}
                    >
                      <OptionTitle>Bathrooms</OptionTitle>
                    </Counter>
                  </Rooms>
                </Section>
                <Section>
                  <Title>More options</Title>
                  <More>
                    <Switcher id="moreOptions">
                      <OptionTitle>Superhost</OptionTitle>
                      <Subtitle>Stay with recognized hosts.</Subtitle>
                      <Link to="#">Learn more</Link>
                    </Switcher>
                  </More>
                </Section>
                <Section>
                  <Title>Amenities</Title>
                  <Options>
                    <Checkbox id="heating">
                      <OptionTitle>Heating</OptionTitle>
                    </Checkbox>
                    <Checkbox id="kitchen">
                      <OptionTitle>Kitchen</OptionTitle>
                    </Checkbox>
                    <Checkbox id="tv">
                      <OptionTitle>TV</OptionTitle>
                    </Checkbox>
                    <Checkbox id="wifi">
                      <OptionTitle>Wireless Internet</OptionTitle>
                    </Checkbox>
                  </Options>
                  <SeeAll>
                    <Text>See all amenities</Text>
                    <Arrow src={arrow} alt="Arrow" />
                  </SeeAll>
                </Section>
                <Section>
                  <Title>Facilities</Title>
                  <Options>
                    <Checkbox id="elevator">
                      <OptionTitle>Elevator</OptionTitle>
                    </Checkbox>
                    <Checkbox id="parking">
                      <OptionTitle>Free parking on premises</OptionTitle>
                    </Checkbox>
                    <Checkbox id="pool">
                      <OptionTitle>Pool</OptionTitle>
                    </Checkbox>
                    <Checkbox id="wheelchair">
                      <OptionTitle>Wheelchair accessiblet</OptionTitle>
                    </Checkbox>
                  </Options>
                  <SeeAll>
                    <Text>See all facilities</Text>
                    <Arrow src={arrow} alt="Arrow" />
                  </SeeAll>
                </Section>
                <MediaQuery minWidth={768}>
                  <Footer>
                    <Cancel onClick={this.onClose}>Cancel</Cancel>
                    <Apply onClick={this.onClose}>See homes</Apply>
                  </Footer>
                </MediaQuery>
              </Content>
            </Container>
          </Dropdown>
        )}
      </FilterContainer>
    );
  }
}
