
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { usePartnerData } from "@/services/api/partner";
import { useFetch } from "@/utils/reactQuery";
import Router from "next/router";
import React, { useState } from "react";
import Card from "@/components/Card";
import * as S from "./styles";

const PartnerList = () => {
  const { data, isLoading } = useFetch("http://localhost:80/partner");
  const { handleDelete } = usePartnerData();
  

  const handleEditPartner = (partnerId: string) => {
    Router.push(`/partner/${partnerId}/edit`);
  };

  const deletePartner = (partnerId: string) => {
    handleDelete(partnerId);
  };

  return (
    <Layout>
      <PageHeader title="Parceiros" redirectAction={"/partner/new"} />
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
              name={'Parceiro 1'}
              onEdit={() => handleEditPartner(student.id)}
              onDelete={() => deletePartner(student.id)}
            />
            <Card
              name={'Parceiro 2'}
              onEdit={() => handleEditPartner(student.id)}
              onDelete={() => deletePartner(student.id)}
            />
            <Card
              name={'Parceiro 3'}
              onEdit={() => handleEditPartner(student.id)}
              onDelete={() => deletePartner(student.id)}
            />
            </S.Wrapper>
    </Layout>
  );
};

export default PartnerList;