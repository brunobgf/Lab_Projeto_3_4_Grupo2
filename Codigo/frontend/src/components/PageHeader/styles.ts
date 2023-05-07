import styled, { css } from 'styled-components'


export const Wrapper = styled.div`
${({ theme }) => css`
  width: 85vw;
  overflow-x: hidden;

  display: flex;
  margin-bottom: 5vh;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.cian};
  padding: 20px 50px;
  position: fixed;
  top: 0;
  z-index: 20;

  `}
`

export const LWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;

`

export const Title = styled.div`
  font-size: 3rem;
  font-weight: 500;
  color: black;
  display:flex;
  align-items: center;
  }
`;

export const Back = styled.button`
  z-index: 10;
  color: white;
  font-size: 35px;
  font-weight: 400;
  background: transparent;
  border: none;
  transaction: 0.5s;
  cursor: pointer;
  margin-right: 20px;
  & :hover {
    background: rgba(0,0,0,0.2);
  }
`;

export const Add = styled(Back)`
align-items: center;
font-size: 1.2rem;
background-color: black;
border-radius: 10px;
padding: 10px;

@media (max-width: 768px) {
  width: 70px;
  margin-left: 30px;
}




`;

export const Coins = styled(Back) `

    color:  #FFA400;
    align-items: center;
    font-size: 1.2rem;
    background-color: black;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (max-width: 768px) {
      width: 70px;
      margin-left: 30px;
    }


`;