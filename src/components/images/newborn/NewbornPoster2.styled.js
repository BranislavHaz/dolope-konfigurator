import styled from "styled-components";
import * as vars from "Variables";

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1.5rem 0;
  background: linear-gradient(
    180deg,
    rgba(250, 250, 250, 1) 45%,
    rgba(247, 247, 247, 1) 100%
  );
`;

export const TitleWrap = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding: 3.5rem 0 1rem;
  text-align: center;

  @media ${vars.DEVICES.laptop} {
    padding: 1.5rem 0 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-family: Poppins;
  font-weight: 500;
`;

export const TitleHighlight = styled.span`
  margin: 0 0.2rem;
  padding: 0 0.1rem;
  background-color: ${vars.MAINCOLOR};
  color: #fff;
  font-weight: 600;
`;

export const PostersWrap = styled.div`
  .swiper {
    padding: 20px 0;
  }

  .swiper {
    .swiper-button-prev,
    .swiper-button-next {
      &::after {
        color: #000;
      }
    }
  }
`;

//laptop
export const PostersMobile = styled.div`
  @media ${vars.DEVICES.laptop} {
    display: none;
  }
  @media ${vars.DEVICES.mobileS} and (orientation: landscape) {
    display: none;
  }
`;

export const PostersLaptop = styled.div`
  display: none;

  @media ${vars.DEVICES.laptop} {
    margin: 1em 0;
    display: flex;
    justify-content: center;
    gap: 2em;
  }

  @media ${vars.DEVICES.mobileS} and (orientation: landscape) {
    margin: 1em 0;
    display: flex;
    justify-content: center;
    gap: 2em;
  }
`;

export const Content = styled.div`
  width: 80vw;
  margin: 1rem auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Poppins;

  @media ${vars.DEVICES.laptop} {
    margin: 2rem auto;
  }
`;

export const PriceTitle = styled.span`
  display: block;
  font-size: 1.2rem;
  text-align: center;
`;

export const PriceSize = styled.span`
  text-transform: uppercase;
`;

export const PriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const OldPrice = styled.span`
  display: block;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: line-through;
`;

export const NewPrice = styled.span`
  font-size: 1.2rem;
  font-weight: 800;
`;

export const AddToCart = styled.span`
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
