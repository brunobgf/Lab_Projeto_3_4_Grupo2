import React from "react";
import Button from "../Button";
import * as S from "./styles";
import { Edit3} from 'styled-icons/feather';
import { Trash2 } from 'styled-icons/feather';

// import { Delete } from "@styled-icons/fluentui-system-regular/Delete";

const Card = ({ children, title, date, onEdit, onDelete }) => {
  return (
    <S.Wrapper>
      <S.LWrapper>
        <S.Title>{title}</S.Title>
        <S.Content> {date} </S.Content>
      </S.LWrapper>

      <S.ButtonWrapper>
        {!!onEdit && <S.Edit onClick={onEdit}>  <Edit3 size={30} /> </S.Edit>}
        {!!onDelete && <S.Delete onClick={() => onDelete()}><Trash2 size={30} /></S.Delete>}
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default Card;