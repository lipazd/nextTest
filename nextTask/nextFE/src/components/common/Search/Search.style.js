import styled from "styled-components";
import { breakpoints } from "../../../defaultTheme";

export const SearchContainer = styled.div`
  margin-bottom: 2rem;
  width: 90%;
  @media (min-width: ${breakpoints.mobile}) {
    width: 40%;
  }
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 4.2rem;
  border-radius: 3rem;
  border: 0.2rem solid #3e8491;
  box-shadow: none;
  text-align: center;
  font-size: 2rem;
`;
