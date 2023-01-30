import styled from "styled-components";

export const Collapse = styled.div`
  position: relative;
  width: 50%;
`;

export const Label = styled.div`
  cursor: pointer;
`;

export const Content = styled.div`
  overflow: hidden;
  position: relative;
  transition: max-height 0.3s ease-out;
  max-height: ${({ isVisible }) => (isVisible ? "100%" : 0)};
`;
