import React, { useState } from "react";
import * as S from "./styles";
import Router from "next/router";
import { ArrowLeft } from 'styled-icons/feather';

const PageHeader = ({ title, redirectAction, backAction }) => {
  const handleRedirectAction = (redirectUrl: string) => {
    Router.push(redirectUrl);
  };

  return (
    <S.Wrapper>
      <S.LWrapper>
        {!!backAction && (
          <S.Back onClick={() => handleRedirectAction(backAction)}>
             <ArrowLeft size={40}/>
          </S.Back>
        )}

        <S.Title>{title}</S.Title>
      </S.LWrapper>

      {!!redirectAction && (
        <S.Add onClick={() => handleRedirectAction(redirectAction)}>
          {"+"}
        </S.Add>
      )}
    </S.Wrapper>
  );
};

export default PageHeader;