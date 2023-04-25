import styled from "styled-components";
import { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightWhite};
    width: 100vw;
    overflow-x: hidden;
    overflow: auto;

    height: 100vh;

  `}
`;

export const AppBox = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryBlue};
    width: 90%;
    height: 90%;
    padding: 2rem;
  `}

  ${media.lessThan("medium")`  
    width: 100%;
    height: 100vh;
  
  `}


`;