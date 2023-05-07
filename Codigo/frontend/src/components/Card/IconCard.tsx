import React from "react";
import Button from "../Button";
import * as S from "./styles";
import Router from "next/router";
import { HandCoin } from '@styled-icons/remix-line/HandCoin'

// import { Delete } from "@styled-icons/fluentui-system-regular/Delete";

const IconCard = ({ children, onClick, icon, title, showCoinIcon }) => {
  const handleRedirectAction = (redirectUrl: string) => {
    if (redirectUrl === "/login") {
      window.sessionStorage.clear();
    }
    Router.push(redirectUrl);
  };

  return (
    <S.CardContainer onClick={() => handleRedirectAction(onClick)}>

        {showCoinIcon &&
         <S.GiveCoins>
            <HandCoin size={50} />
         </S.GiveCoins>
        }

       
      <S.CardIcon src={icon} alt="Card icon" />
      <S.DashboardCardTitle>{title}</S.DashboardCardTitle>

    </S.CardContainer>
  );
};

export default IconCard;