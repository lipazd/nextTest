import { styled } from "styled-components";
import { breakpoints } from "../../../defaultTheme";

export const ReadMoreButton = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$isArrowRight ? "" : "row-reverse")};
  justify-content: space-between;
  width: 100%;
  align-items: center;
  font-size: 1.3rem;
  padding: 0.6rem 1.4rem;
  border: 0.1rem solid #000;
  border-radius: 10rem;
  margin-top: auto;
  cursor: pointer;
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;
export const ReadMoreText = styled.div``;
export const ArrowIcon = styled.img`
  ${(props) =>
    !props.$isArrowRight &&
    `
-webkit-transform: scaleX(-1);
transform: scaleX(-1);
`}
`;
