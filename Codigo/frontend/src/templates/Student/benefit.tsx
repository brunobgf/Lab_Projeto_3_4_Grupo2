/* eslint-disable react/no-children-prop */

import StudentLayout from "@/components/Layout/StudentLayout";
import PageHeader from "@/components/PageHeader";
import { useStudentData } from "@/services/api/student";
import { useFetch } from "@/utils/reactQuery";
import Router from "next/router";
import React, { useState } from "react";
import Card from "@/components/Card";
import * as S from "./styles";
import IconCard from "@/components/Card/IconCard";

const StudentBenefits = () => {
  const { data: coinData, isLoading } = useFetch("http://localhost:8080/coin/byStudent/1");
  const { handleDelete } = useStudentData();

  const deleteStudent = (studentId: string) => {
    handleDelete(studentId);
  };

  const [students, setStudents] = useState([]);

  let coins = 0;

    coinData?.data.map((coin: any) => (
      coins = coins + coin.amount))

  console.log(coinData?.data);


  return (
    <StudentLayout>
      <PageHeader title="Benefícios" redirectAction={""} backAction={""} coins={coins}/>
      <S.Wrapper>

      <S.CardWrapper>
        <IconCard
          title="Benefício 1"
          onClick=''
          icon=""
        ></IconCard>

        <IconCard
          title="Benefício 2"
          onClick=""
          icon=""
        ></IconCard>
      </S.CardWrapper>

      </S.Wrapper>
    </StudentLayout>
  );
};

export default StudentBenefits;

