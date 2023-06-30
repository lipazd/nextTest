import styled from "styled-components";
import { breakpoints, headerSize } from "../../defaultTheme";
export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  background: #fff;
  height: ${headerSize.mobile};
  padding: 1.3rem 0.9rem;
  box-shadow: 0 0.3rem 0.6rem rgba(64, 60, 67, 0.16);
  @media (min-width: ${breakpoints.mobile}) {
    height: ${headerSize.desktop};
    padding: 2rem 14rem;
  }
`;
export const LogoImg = styled.img`
  width: auto;
  height: 100%;
`;
