import styled from "styled-components";
import theme from "../../styles/theme";

export const Wrapper = styled.main`
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  margin-top:20vh;
`;


export const TextFieldWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
`;