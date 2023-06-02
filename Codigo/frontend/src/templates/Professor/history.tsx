/* eslint-disable react/no-children-prop */

import ProfessorLayout from "@/components/Layout/ProfessorLayout";
import PageHeader from "@/components/PageHeader";
import { useStudentData } from "@/services/api/student";
import { useFetch } from "@/utils/reactQuery";
import Router from "next/router";
import React, { useState } from "react";
import Card from "@/components/Card";
import * as S from "./styles";
import Button from "@/components/Button";
import { useProfessorData } from "@/services/api/professor";

const ProfessorHistory = () => {
  const { data: studentData, isLoading: isStudentLoading } = useFetch("http://localhost:8080/student");
  const { data: professorData, isLoading: isProfessorLoading } = useFetch("http://localhost:8080/professor/1");
  //TODO: Test this
  const { data: coinData, isLoading } = useFetch("http://localhost:8080/coin/byProfessor/1");
  const { handleExtract } = useProfessorData();


  const handleGivewayCoinStudent = (studentId: string) => {
    Router.push(`/student/${studentId}/giveway`);
  };

  const extract = () =>{
    handleExtract("1");
  }

  const [students, setStudents] = useState([]);

  const hasCoins = () => professorData?.data.coinBalance != undefined;

  return (
    <ProfessorLayout>
      <PageHeader title="Extrato" redirectAction={""} backAction={""} onGeneratePdf={""} coins={hasCoins() ? professorData?.data.coinBalance: "0"}/>
      <S.Wrapper>
      {coinData?.data.map((coin: any) => (
            <Card
              key={coin.id}
              children={""}
              title={coin.id}
              name={"- " + coin.amount + " moedas" + ". Motivo:  " + coin.motivation}
              onGiveCoins={""}
              onDelete={""}
              onEdit={""}

            />
          ))}
           <Button onClick={extract}>Salvar PDF</Button>
        </S.Wrapper>
    </ProfessorLayout>
  );
};

export default ProfessorHistory;

