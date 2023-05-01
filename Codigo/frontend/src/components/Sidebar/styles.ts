import styled, { css } from 'styled-components'

export const SidebarWrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 15%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1;

  @media (max-width: 768px) {
    width: 15%;
  }


`;

export const SidebarHeader = styled.header`
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  background-color: #eee;
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const SidebarLink = styled.a`
${({ theme }) => css`

  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: #000;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-decoration: none;

  &:hover {
    color:  ${theme.colors.red};
  }

 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 100%;
    margin-bottom: 0;
  }

  }

  @media (max-width: 768px) {
    .link-label {
      display: none;
    }
  }
  `}
`;

