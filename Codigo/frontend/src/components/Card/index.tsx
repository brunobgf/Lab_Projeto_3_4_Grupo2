import React from "react";
import Button from "../Button";
import * as S from "./styles";
import { Edit3} from 'styled-icons/feather';
import { Trash2 } from 'styled-icons/feather';
import { HandCoin } from '@styled-icons/remix-line/HandCoin'

// import { Delete } from "@styled-icons/fluentui-system-regular/Delete";

const Card = ({ children, title, name, onEdit, onDelete, onGiveCoins}) => {
  return (
    <S.Wrapper>
      <S.LWrapper>
        <S.TextWrapper><S.Content style={{ paddingLeft: '10px' }}>{name}</S.Content></S.TextWrapper>
 
      </S.LWrapper>

      <S.ButtonWrapper>
        {!!onGiveCoins && <S.GiveCoins onClick={onGiveCoins}><HandCoin size={30} /></S.GiveCoins>}
        {!!onEdit && <S.Edit onClick={onEdit}>  <Edit3 size={30} /> </S.Edit>}
        {!!onDelete && <S.Delete onClick={onDelete}><Trash2 size={30} /></S.Delete>}
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default Card;