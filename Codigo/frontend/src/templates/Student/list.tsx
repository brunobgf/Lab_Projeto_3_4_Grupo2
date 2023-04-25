/* eslint-disable react/no-children-prop */

import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useStudentData } from "@/services/api/student";
import { useFetch } from "@/utils/reactQuery";
import Router from "next/router";
import React, { useState } from "react";
import Card from "@/components/Card";
import * as S from "./styles";

const StudentList = () => {
  const { data, isLoading } = useFetch("http://localhost:8080/student");
  const { handleDelete } = useStudentData();

  const handleEditStudent = (studentId: string) => {
    Router.push(`/student/${studentId}/edit`);
  };

  const deleteStudent = (studentId: string) => {
    handleDelete(studentId);
  };

  const [students, setStudents] = useState([]);

  return (
    <Layout>
      <PageHeader title="Estudantes" redirectAction={"/student/new"} backAction={""}/>
      <S.Wrapper>
       {isLoading
        ? "Carregando..."
        : data?.data.map((student: any) => (
            <Card
              key={student.id}
              children={""}
              title={student.name}
              name={student.name}
              onEdit={() => handleEditStudent(student.id)}
              onDelete={() => deleteStudent(student.id)}
            />
          ))}
            </S.Wrapper>
    </Layout>
  );
};

export default StudentList;