import React from "react";
import Button from "../Button";
import * as S from "./styles";
import Router from "next/router";
import { CoinStack } from '@styled-icons/boxicons-solid/CoinStack'

// import { Delete } from "@styled-icons/fluentui-system-regular/Delete";

const CoinIconCard = ({ children, onClick, icon, title, showCoinIcon }) => {
 
  return (
    <S.CardContainer >

        {showCoinIcon &&
         <S.GiveCoins>
            <CoinStack size={50} />
         </S.GiveCoins>
        }

      <S.DashboardCardTitle>{title}</S.DashboardCardTitle>

    </S.CardContainer>
  );
};

export default CoinIconCard;