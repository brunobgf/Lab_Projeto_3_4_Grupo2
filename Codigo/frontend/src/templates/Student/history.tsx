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

const StudentHistory = () => {
  const { data: coinData, isLoading } = useFetch("http://localhost:8080/coin/byStudent/1");
  const { data: professorData, isLoading: isProfessorLoading } = useFetch("http://localhost:8080/professor/1");
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
      <PageHeader title="Extrato" redirectAction={""} backAction={""} coins={coins}/>
      <S.Wrapper>

      {coinData?.data.map((coin: any) => (
            <Card
              key={coin.id}
              children={""}
              title={coin.id}
              name={"+ " + coin.amount + " moedas" + ". Motivo:  " + coin.motivation}
              onGiveCoins={""}
              onDelete={""}
              onEdit={""}

            />
          ))}

      </S.Wrapper>
    </StudentLayout>
  );
};

export default StudentHistory;

