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

const StudentDashboard = () => {
  const { data, isLoading } = useFetch("http://localhost:8080/student");
  const { handleDelete } = useStudentData();

  const deleteStudent = (studentId: string) => {
    handleDelete(studentId);
  };

  const [students, setStudents] = useState([]);

  const hasCoins = () => data?.data[0]?.coins !== undefined;


  return (
    <StudentLayout>
      <PageHeader title="Dashboard" redirectAction={""} backAction={""} coins={hasCoins() ? data?.data[0].coins.toString() : "0"}/>
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

export default StudentDashboard;

