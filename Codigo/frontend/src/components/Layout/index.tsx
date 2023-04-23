import React from "react";
import { ThemeProvider } from "styled-components";
import * as S from "./styles";

import theme from "@/styles/theme";

const Layout = ({ children }: any) => {
  return (
    <S.Wrapper>

      {children}

    </S.Wrapper>
  );
};

export default Layout;
