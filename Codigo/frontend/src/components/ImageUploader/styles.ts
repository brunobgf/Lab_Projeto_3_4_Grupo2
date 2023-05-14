import theme from '@/styles/theme';
import styled from 'styled-components';

export const Input = styled.input`
  display: none;
 

`;

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  font-family: "Maven Pro";
  font-weight: 500;
  border-radius: 5px;
  padding: 0.5rem 1.5rem;
  font-size: 1.2rem;
  border: none;
  color: white;
  background-color: ${theme.colors.black};
  transition: 0.3s;
  box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 11%);
  width: 25vw;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.darkGrey};
  }
`;

export const PreviewImage = styled.img`
  max-width: 60%;
  max-height: 60%;
  margin-top: 20px;
`;
