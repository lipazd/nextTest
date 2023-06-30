import { styled } from "styled-components";
import { breakpoints, headerSize } from "../../defaultTheme";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #00d7ff;
  min-height: calc(100vh - 7.8rem);
  margin-top: ${headerSize.mobile};
  @media (min-width: ${breakpoints.mobile}) {
    min-height: calc(100vh - 12.3rem);
    margin-top: ${headerSize.desktop};
  }
`;
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  justify-content: center;
  max-width: 75vw;
  @media (min-width: ${breakpoints.mobile}) {
    gap: 1.5rem;
    max-width: 85vw;
  }
`;
export const HomePageTitle = styled.div`
  font-size: 2.7rem;
  text-transform: uppercase;
  margin: 3.4rem 2.4rem 2rem;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 85vw;
  text-align: center;
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 5rem;
  }
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 8rem;
    max-width: 50vw;
  }
`;
