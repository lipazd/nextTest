import { styled } from "styled-components";
import { breakpoints } from "../../defaultTheme";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  flex-basis: 48%;
  margin-bottom: 5.5rem;
  @media (min-width: ${breakpoints.mobile}) {
    gap: 1.9rem;
    flex-basis: 15%;
    margin-bottom: 8rem;
  }
`;
export const MovieImg = styled.img`
  width: 100%;
  height: auto;
`;
export const MovieTitle = styled.div`
  font-size: 2rem;
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 3rem;
  }
`;
export const BottomCard = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.1rem;
  width: 100%;
`;
