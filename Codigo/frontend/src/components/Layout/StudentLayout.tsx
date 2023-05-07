import React from "react";
import { ThemeProvider } from "styled-components";
import * as S from "./styles";

import theme from "@/styles/theme";
import Sidebar from "../Sidebar";

const Layout = ({ children }: any) => {
  return (
    <S.Wrapper>
 
   <Sidebar showStudentLinks={true} /> 
      <S.MainContent>{children}</S.MainContent>

    </S.Wrapper>
  );
};

export default Layout;