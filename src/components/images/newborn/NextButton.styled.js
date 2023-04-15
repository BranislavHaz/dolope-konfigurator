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
  /*   margin: 2rem 0 4rem 0;
  background-color: ${vars.MAINCOLOR};
  color: #fff;
  font-size: 1em;
  font-family: Poppins;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgb(181, 202, 189, 0.9);
  } */
  margin-top: 1rem;
  padding: 0.6rem 0.6rem;
  border-radius: 10px;
  border: none;
  font-family: Poppins;
  font-size: 0.8rem;
  font-weight: 800;
  color: #fff;
  background-color: ${vars.MAINCOLOR};
  cursor: pointer;
  transition: all 0.1s ease-out;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

  &:hover {
    background-color: rgb(181, 202, 189, 0.9);
    font-size: 0.82rem;
  }

  @media ${vars.DEVICES.laptop} {
    padding: 1rem;
  }
`;
