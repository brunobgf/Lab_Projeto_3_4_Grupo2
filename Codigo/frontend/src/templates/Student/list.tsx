
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useStudentData } from "@/services/api/student";
import { useFetch } from "@/utils/reactQuery";
import Router from "next/router";
import React, { useState } from "react";
import Card from "@/components/Card";
import * as S from "./styles";

const StudentList = () => {
  const { data, isLoading } = useFetch("http://localhost:80/students");
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
      <PageHeader title="Estudantes" redirectAction={"/student/new"} />
      <S.Wrapper>
      {/* {isLoading
        ? "Carregando..."
        : data?.data.map((patient: any) => (
            <Card
            key={patient.id}
              title={patient.name}
              onEdit={() => handleEditPatient(patient.id)}
              onDelete={() => deletePatient(patient.id)}
            />
          ))} */}
          <Card
              name={'Aluno 1'}
              onEdit={() => handleEditStudent(student.id)}
              onDelete={() => handleDelete(student.id)}
            />
            <Card
              name={'Aluno 2'}
              onEdit={() => handleEditStudent(student.id)}
              onDelete={() => handleDelete(student.id)}
            />
            <Card
              name={'Aluno 3'}
              onEdit={() => handleEditStudent(student.id)}
              onDelete={() => handleDelete(student.id)}
            />
            </S.Wrapper>
    </Layout>
  );
};

export default StudentList;