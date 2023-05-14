import styled from "styled-components";
import theme from "../../styles/theme";
export const LWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: start;

`

export const Wrapper = styled.div`
  max-width: 90vw;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.black};
  border-radius: 5px;
  margin-bottom: 25px;
  margin-right: 20px;
  border-left: 10px solid ${theme.colors.darkRed};
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;



export const TextWrapper = styled.div`
  display: flex;
  flex-direction:row;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 12px;
  color: ${theme.colors.black};

  min-width: 10%;
  max-width: 100%;

`;

export const Content = styled.div`
color: ${theme.colors.black};
font-size: 16px;
font-weight: 300;
paddingLeft: 10px;


`;

export const Edit = styled.button`
z-index: 10;
color: blue;
font-size: 25px;
font-weight: 600;
background: transparent;
border: none;
border-radius: 100%;
transaction: 0.5s;
cursor: pointer;
margin-right: 20px;

`;

export const Delete = styled(Edit)`
color: red;
`;

export const GiveCoins = styled(Edit)`
color: #FFA400;
`;

export const Benefit = styled(Edit)`
color: #441AFE;
`;


export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 28vw;
  padding: 10px;
  border-radius: 5px;
  background-color: ${theme.colors.white};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardIcon = styled.img`
  margin-top: 2vh;
  width: 10vw;
  height: 7vh;
`;


export const DashboardCardTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  padding: 8px 16px;
  color: ${theme.colors.black};

  min-width: 10%;
  max-width: 70%;

`;
