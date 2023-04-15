import styled from "styled-components";
import * as vars from "Variables";

export const Accept = styled.span`
  margin-top: 1rem;
  padding: 0.6rem 0.6rem;
  border-radius: 10px;
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

export const Reject = styled.div`
  margin-top: 0.6rem;
  font-size: 0.8rem;
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.1s ease-out;

  &:hover {
    font-size: 0.82rem;
  }
`;
