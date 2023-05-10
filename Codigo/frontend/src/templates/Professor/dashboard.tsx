/* eslint-disable react/no-children-prop */

import ProfessorLayout from "@/components/Layout/ProfessorLayout";
import PageHeader from "@/components/PageHeader";
import { useStudentData } from "@/services/api/student";
import { useFetch } from "@/utils/reactQuery";
import Router from "next/router";
import React, { useState } from "react";
import Card from "@/components/Card";
import * as S from "./styles";

const ProfessorDashboard = () => {
  const { data: studentData, isLoading: isStudentLoading } = useFetch("http://localhost:8080/student");
  const { data: professorData, isLoading: isProfessorLoading } = useFetch("http://localhost:8080/professor");


  const handleGivewayCoinStudent = (studentId: string) => {
    Router.push(`/student/${studentId}/giveway`);
  };

  const [students, setStudents] = useState([]);

  const hasCoins = () => professorData?.data[0]?.coins !== undefined;

  return (
    <ProfessorLayout>
      <PageHeader title="Dashboard" redirectAction={""} backAction={""} coins={hasCoins() ? professorData?.data[0].coins.toString() : "0"}/>
      <S.Wrapper>
       {isStudentLoading
        ? "Carregando..."
        : studentData?.data.map((student: any) => (
            <Card
              key={student.id}
              children={""}
              title={student.name}
              name={student.name}
              onGiveCoins={() => handleGivewayCoinStudent(student.id)}
              onDelete={""}
              onEdit={""}

            />
          ))}

            {/* MOCK VERSION */}

            <Card
              key={""}
              children={""}
              title={"teste"}
              name={"teste"}
              onGiveCoins={() => handleGivewayCoinStudent("")}

            />
            </S.Wrapper>
    </ProfessorLayout>
  );
};

export default ProfessorDashboard;

