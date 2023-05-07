import styled, { css } from 'styled-components'

const inputModifiers = {
  sufix: (content) => css`
    &&::after{
      content: '${content}';
    }
  `
}

export const Input = styled.input`
  ${({ theme, sufix }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color:  ${theme.colors.black};
    border-radius: 4px;
    background-color: ${theme.colors.cian};
    border: 1.5px solid ${theme.colors.primaryBlue};
    /* box-shadow: ${theme.shadows.black}; */
    width: 100%;
    transition: 1s;

    &:focus {
      outline: none;
      box-shadow: ${theme.shadows.blue};
    }

    ${sufix && inputModifiers.sufix(sufix)}
  `}
`
export const TextArea = styled.textarea`
  ${({ theme, sufix }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color:  ${theme.colors.black};
    border-radius: 4px;
    background-color: ${theme.colors.cian};
    border: 1.5px solid ${theme.colors.primaryBlue};
    /* box-shadow: ${theme.shadows.black}; */
    width: 100%;
    transition: 1s;

    &:focus {
      outline: none;
      box-shadow: ${theme.shadows.blue};
    }

    ${sufix && inputModifiers.sufix(sufix)}
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xsmall};
    margin-bottom: 0.3rem;
    margin-left: 0.3rem;
    font-weight: ${theme.font.bold};
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: 15px;
    font-style: italic;
    margin-bottom: 1rem;
    transform: translateY(-7px);
  `}
`

export const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`
const wrapperModifiers = {
  large: () => css`
    ${Input} {
      padding: 0.4rem 1rem;
    }
  `,

  error: (theme) => css`
    ${Input} {
      border-color: ${theme.colors.red};
    }
  `
}

export const Wrapper = styled.div`
  ${({ theme, elsize, error }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    ${!!elsize && wrapperModifiers[elsize]()}
    ${error && wrapperModifiers.error(theme)}
  `}
`
