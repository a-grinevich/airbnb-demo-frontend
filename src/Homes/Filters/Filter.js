import React from "react";
import {
  Button,
  Dropdown,
  FilterContainer,
  Header,
  Close,
  Reset,
  Cancel,
  Apply,
  Footer,
  Content,
  Name
} from "./styled";
import MediaQuery from "react-responsive";

export default class Filter extends React.Component {
  state = {
    isOpen: false
  };

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  onClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <FilterContainer className={this.props.className}>
        <Button onClick={this.toggleOpen} isOpen={this.state.isOpen}>
          {this.state.isOpen && this.props.activeName
            ? this.props.activeName
            : this.props.name}
        </Button>
        {this.state.isOpen && (
          <Dropdown>
            <MediaQuery maxWidth={767}>
              <Header>
                <Close onClick={this.onClose} />
                <Name>
                  {this.props.mobileTitle
                    ? this.props.mobileTitle
                    : this.props.name}
                </Name>
                <Reset>Reset</Reset>
              </Header>
            </MediaQuery>
            <Content>{this.props.children}</Content>
            <MediaQuery minWidth={768}>
              <Footer>
                <Cancel onClick={this.onClose}>Cancel</Cancel>
                <Apply onClick={this.onClose}>Apply</Apply>
              </Footer>
            </MediaQuery>
          </Dropdown>
        )}
      </FilterContainer>
    );
  }
}
