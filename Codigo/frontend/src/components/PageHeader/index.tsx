import React, { useState } from "react";
import * as S from "./styles";
import Router from "next/router";

const PageHeader = ({ title, redirectAction, backAction }) => {
  const handleRedirectAction = (redirectUrl: string) => {
    Router.push(redirectUrl);
  };

  return (
    <S.Wrapper>
      <S.LWrapper>
        {!!backAction && (
          <S.Back onClick={() => handleRedirectAction(backAction)}>
            {"<"}
          </S.Back>
        )}

        <S.Title>{title}</S.Title>
      </S.LWrapper>

      {!!redirectAction && (
        <S.Add onClick={() => handleRedirectAction(redirectAction)}>
          {"Novo +"}
        </S.Add>
      )}
    </S.Wrapper>
  );
};

export default PageHeader;