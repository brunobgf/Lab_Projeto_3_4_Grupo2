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
import apiRoutes from "@/services/routes";
import Button from "@/components/Button";

const StudentHistory = () => {
  const {data: coinData, isLoading } = useFetch("http://localhost:8080/coin/byStudent/1");
  const { data: balance } = useFetch(apiRoutes.student.balance + "1");
  const { data: exits} = useFetch("http://localhost:8080/benefitStudent/byStudent/1");
  const { data: professorData, isLoading: isProfessorLoading } = useFetch("http://localhost:8080/professor/1");
  const { handleDelete, handleExtract } = useStudentData();

  const deleteStudent = (studentId: string) => {
    handleDelete(studentId);
  };

  const extract = () =>{
    handleExtract("1");
  }

  const [students, setStudents] = useState([]);

  return (
    <StudentLayout>
      <PageHeader title="Extrato" redirectAction={""} backAction={""} onGeneratePdf={""} coins={balance?.data}/>
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

          {exits?.data.map((e: any) => (
            <Card
              key={e.id}
              children={""}
              title={e.id}
              name={"- " + e.benefit.price + " moedas" + ". Trocada(s) por:  " + e.benefit.name}
              onGiveCoins={""}
              onDelete={""}
              onEdit={""}

            />
          ))}

          <Button onClick={extract}>Salvar PDF</Button>

      </S.Wrapper>
    </StudentLayout>
  );
};

export default StudentHistory;

