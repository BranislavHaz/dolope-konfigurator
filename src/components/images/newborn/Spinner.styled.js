import styled, { keyframes } from "styled-components";
import * as vars from "Variables";

const rotate = keyframes` 
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")}; ;
`;

export const SpinnerWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export const SpinnerText = styled.div`
  font-size: 1.2rem;
`;

export const SpinnerCircle = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid ${vars.MAINCOLOR};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${rotate} 1s linear infinite;
`;
