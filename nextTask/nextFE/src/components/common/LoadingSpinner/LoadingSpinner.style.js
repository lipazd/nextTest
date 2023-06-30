import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 7rem;
  height: 7rem;
  &::after {
    content: " ";
    display: block;
    width: 3.4rem;
    height: 3.4rem;
    margin: 0.8rem;
    border-radius: 50%;
    border: 0.6rem solid #2c9ec0;
    border-color: #2c9ec0 transparent #2c9ec0 transparent;
    animation: ${rotate} 2s linear infinite;
  }
`;
export const SpinnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
