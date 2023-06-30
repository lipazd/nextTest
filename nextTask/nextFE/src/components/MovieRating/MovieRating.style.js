import { styled } from "styled-components";
import { breakpoints } from "../../defaultTheme";

export const MovieRating = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.6rem;
  width: 100%;
  align-items: center;
  font-size: 2rem;
  @media (min-width: ${breakpoints.mobile}) {
      font-size: 2.5rem;
  }
`;
