import styled from "styled-components";
import * as pallete from "Variables";

export const ButtonWrapper = styled.div`
  margin: 2em 0 4em 0;
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const Button = styled.button`
  padding: 1.2em;
  background-color: ${pallete.MAINCOLOR};
  color: #fff;
  font-size: 1em;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgb(181, 202, 189, 0.9);
  }
`;
