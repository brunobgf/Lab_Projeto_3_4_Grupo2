import React, { useState } from "react";
import * as S from "./styles";
import Router from "next/router";
import { CoinStack } from '@styled-icons/boxicons-solid/CoinStack'

const PageHeader = ({ title, redirectAction, backAction, coins, onGeneratePdf }) => {
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

      {coins && (
        <S.Coins><CoinStack size={25}/>{`${coins}`}</S.Coins>
      )}

      {!!onGeneratePdf && <S.Add onClick={onGeneratePdf}>{"Gerar Pdf"}</S.Add>}

    </S.Wrapper>
  );
};

export default PageHeader;