/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-key */

import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { usePartnerData } from "@/services/api/partner";
import { useFetch } from "@/utils/reactQuery";
import Router from "next/router";
import React, { useState } from "react";
import Card from "@/components/Card";
import * as S from "./styles";

const PartnerList = () => {
  const { data, isLoading } = useFetch("http://localhost:8080/partner");
  const { handleDelete } = usePartnerData();
  

  const handleEditPartner = (partnerId: string) => {
    Router.push(`/partner/${partnerId}/edit`);
  };

  const deletePartner = (partnerId: string) => {
    handleDelete(partnerId);
  };

  return (
    <Layout>
      <PageHeader title="Parceiros" redirectAction={"/partner/new"} backAction={""} coins={""}/>
      <S.Wrapper>
      {isLoading
        ? "Carregando..."
        : data?.data.map((partner: any) => (
            <Card
              key={partner.id}
              children={""}
              title={partner.name}
              name={partner.name}
              onEdit={() => handleEditPartner(partner.id)}
              onDelete={() => deletePartner(partner.id)}
            />
          ))}
            </S.Wrapper>
    </Layout>
  );
};

export default PartnerList;