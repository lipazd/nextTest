import { styled } from "styled-components";
import { breakpoints } from "../../defaultTheme";

export const MovieBackground = styled.div`
  position: fixed;
  min-height: calc(100vh - 7.8rem);
  top: 7.8rem;
  width: 100%;
  background: #000000c4;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  @media (min-width: ${breakpoints.mobile}) {
    min-height: calc(100vh - 12.3rem);
    top: 12.3rem;
  }
`;
export const MovieModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 78vw;
  background: #fff;
  height: 87vh;
  padding: 1.8rem;
  justify-content: space-between;
  overflow-y: auto;
  @media (min-width: ${breakpoints.mobile}) {
    gap: 7vw;
    padding: 4.9rem 7vw;
    height: 70vh;
    width: 70vw;
    flex-direction: row;
    overflow-y: hidden;
  }
`;
export const MovieImgContainer = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
    flex-basis: 50%;
  }
`;
export const MovieImg = styled.img`
  height: auto;
  width: 100%;
  @media (min-width: ${breakpoints.mobile}) {
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: left top;
  }
`;
export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-basis: 50%;
`;
export const MovieTitle = styled.div`
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 0.7rem;
  @media (min-width: ${breakpoints.mobile}) {
    margin-bottom: 1rem;
    font-size: 4.5rem;
  }
`;
export const MovieRuntime = styled.div`
  margin-bottom: 0.8rem;
  font-size: 2rem;
  @media (min-width: ${breakpoints.mobile}) {
    margin-bottom: 1.9rem;
    font-size: 2.5rem;
  }
`;
export const MovieSynopsis = styled.div`
  margin: 2.2rem 0;
  font-size: 1.6rem;
  @media (min-width: ${breakpoints.mobile}) {
    margin-bottom: 2.8rem 0;
    font-size: 3rem;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
export const MovieModalButton = styled.div`
  width: 100%;
  margin-top: auto;
  @media (min-width: ${breakpoints.mobile}) {
    width: 24.6rem;
  }
`;
