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


  // const [coins, setCoins] = useState(0);

  // useEffect(() => {

  //   const fetchCoins = async () => {
  //     const response = await fetch("/api/coins");
  //     const data = await response.json();
  //     setCoins(data.coins);
  //   };

  //   fetchCoins();
  // }, []);

  return (
    <StudentLayout>
      <PageHeader title="Dashboard" redirectAction={""} backAction={""} coins={"99999"}/>
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

