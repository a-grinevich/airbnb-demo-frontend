import React from "react";
import ReactMap from "google-map-react";
import styled from "styled-components";

const MapContainer = styled.div`
  display: none;

  @media screen and (min-width: 992px) {
    display: block;
    position: fixed;
    top: 138px;
    right: 0;
    bottom: 0;
    left: calc(50% + 176px);
    z-index: -1;
  }

  @media screen and (min-width: 1200px) {
    display: block;
    position: fixed;
    top: 136px;
    right: 0;
    bottom: 0;
    left: calc(50% + 211px);
    z-index: -1;
  }
`;

export default props => (
  <MapContainer>
    <ReactMap
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
      center={props.center}
      zoom={props.zoom}
    />
  </MapContainer>
);
