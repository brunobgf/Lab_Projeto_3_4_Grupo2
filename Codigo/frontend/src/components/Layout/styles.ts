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

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  

  `}
`;
export const MainContent =  styled.div`
flex: 3;
overflow: auto;
margin-left: 15vw; 
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

export const SidebarContent = styled.div`

  flex:2


  @media only screen and (max-width: 768px) {
    width: 30%;
  }

  @media only screen and (max-width: 480px) {
    width: 40%;
  }

`;

