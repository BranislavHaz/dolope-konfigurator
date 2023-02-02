import styled from "styled-components";
import * as vars from "Variables";

export const ButtonWrapper = styled.div`
  width: 100%;
  justify-content: end;

  @media ${vars.DEVICES.mobileS} {
    display: none;
  }

  @media ${vars.DEVICES.laptop} {
    display: flex;
  }
`;

export const Button = styled.button`
  margin: 2rem 0 4rem 0;
  background-color: ${vars.MAINCOLOR};
  color: #fff;
  font-size: 1em;
  font-family: Poppins;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgb(181, 202, 189, 0.9);
  }

  @media ${vars.DEVICES.laptop} {
    padding: 1rem;
  }

  @media ${vars.DEVICES.laptopL} {
    padding: 1.2rem;
  }
`;
