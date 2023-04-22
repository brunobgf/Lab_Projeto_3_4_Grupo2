import Button from "@/components/Button";
import FormModal from "@/components/FormModal";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import PageHeader from "@/components/PageHeader";
import { usePatientData } from "@/services/api/student";
import { useFetch } from "@/utils/reactQuery";
import Router from "next/router";
import React, { useState } from "react";
import RegisterPatient from "./form";
import Card from "@/components/Card";

const StudentList = () => {
  const { data, isLoading } = useFetch("http://localhost:3000/patients");
  const { handleDelete } = usePatientData();

  const handleEditPatient = (patientId: string) => {
    Router.push(`/patient/${patientId}/edit`);
  };

  const deletePatient = (patientId: string) => {
    handleDelete(patientId);
  };

  const [modal, setModal] = useState({
    open: false,
    info: "",
    title: "",
    action: () => { },
  });

  
  const [formModal, setFormModal] = useState({
    open: false,
    info: "",
    title: "",
    action: () => { },
  });


//   const actions = {
//     onEdit: () => {
//       setFormModal({
//         open: true,
//         info: row.id,
//         title: "Editar Cliente",
//         action: () => null
//       })
//     },
//     onDelete: () => {
//       setModal({
//         open: true,
//         info: row.name,
//         action: () => handleDelete(row.id),
//       })
//     },
//   }

  const [clients, setClients] = useState([]);
  return (
    <Layout>
      <PageHeader title="Pacientes" redirectAction={"/aluno/new"} />

      {isLoading
        ? "Carregando..."
        : data?.data.map((patient: any) => (
            <Card
            key={patient.id}
              title={patient.name}
              onEdit={() => handleEditPatient(patient.id)}
              onDelete={() => deletePatient(patient.id)}
            />
          ))}
    </Layout>
  );
};

export default StudentList;