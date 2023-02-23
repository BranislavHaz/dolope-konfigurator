import styled from "styled-components";
import * as vars from "Variables";

export const PosterView = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 1;

  @media ${vars.DEVICES.mobileS} and (orientation: portrait) {
    justify-content: center;
    flex-direction: column;
  }

  @media ${vars.DEVICES.mobileS} and (orientation: landscape) {
    justify-content: center;
    flex-direction: row;
  }

  @media ${vars.DEVICES.laptop} {
    flex-direction: row;
    margin-top: 0;
  }

  @media ${vars.DEVICES.laptopL} {
    justify-content: end;
  }
`;
