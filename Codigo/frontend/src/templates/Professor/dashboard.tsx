/* eslint-disable react/no-children-prop */

import ProfessorLayout from "@/components/Layout/ProfessorLayout";
import PageHeader from "@/components/PageHeader";
import { useStudentData } from "@/services/api/student";
import { useFetch } from "@/utils/reactQuery";
import Router from "next/router";
import React, { useState } from "react";
import CoinIconCard from "@/components/Card/CoinIconCard";
import { CoinStack } from '@styled-icons/boxicons-solid/CoinStack'

import * as S from "./styles";

const ProfessorDashboard = () => {
  const { data, isLoading } = useFetch("http://localhost:8080/professor");
  const { handleDelete } = useStudentData();

  const handleEditStudent = (studentId: string) => {
    Router.push(`/student/${studentId}/edit`);
  };

  const handleGivewayCoinStudent = (studentId: string) => {
    Router.push(`/student/${studentId}/giveway`);
  };


  const deleteStudent = (studentId: string) => {
    handleDelete(studentId);
  };

  const [students, setStudents] = useState([]);

  return (
    <ProfessorLayout>
      <PageHeader title="Extrato" redirectAction={""} backAction={""}/>
      <S.Wrapper>
       {/* {isLoading
        ? "Carregando..."
        : data?.data.map((student: any) => (
            <Card
              key={student.id}
              children={""}
              title={student.name}
              name={student.name}
              onGiveCoins={() => handleEditStudent(student.id)}

            />
          ))} */}
             
            <CoinIconCard
              key={""}
          
              title={"Total moedas: 99999"}
              showCoinIcon={true}
            />
            </S.Wrapper>
    </ProfessorLayout>
  );
};

export default ProfessorDashboard;