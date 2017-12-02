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
          {this.props.isOpen && this.props.activeName
            ? this.props.activeName
            : this.props.name}
        </Button>
        {this.props.isOpen && (
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
