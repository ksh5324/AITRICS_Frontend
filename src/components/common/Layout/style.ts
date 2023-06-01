import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  align-items: center;
  overflow: scroll;

  @media screen and (max-width: 1500px) {
    justify-content: center;
  }
  @media screen and (max-width: 1400px) {
    justify-content: flex-start;
  }
`;
