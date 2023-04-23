import styled from "styled-components";
import { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.grey};
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const AppBox = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.whiteBg};
    width: 80%;
    height: 90%;
    padding: 2rem;
    overflow: auto;
  `}

  ${media.lessThan("medium")`  
    width: 100%;
    height: 100vh;
  
  `}


`;
