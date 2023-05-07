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
    <ProfessorLayout>
      <PageHeader title="Dashboard" redirectAction={""} backAction={""} coins={"99999"}/>
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

