import styled from "styled-components";

export const Category = styled.div`
  line-height: normal;
  font-size: 8px;
  text-transform: uppercase;
  margin-bottom: 2px;

  @media (min-width: 768px) {
    font-size: 10px;
  }
`;
export const Title = styled.div`
  line-height: normal;
  font-size: 14px;
  margin-bottom: 4px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
export const Price = styled.div`
  line-height: normal;
  font-size: 12px;
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
