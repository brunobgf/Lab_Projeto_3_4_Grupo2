/* eslint-disable react/no-children-prop */

import PartnerLayout from "@/components/Layout/PartnerLayout";
import PageHeader from "@/components/PageHeader";
import { useStudentData } from "@/services/api/student";
import { useFetch } from "@/utils/reactQuery";
import Router from "next/router";
import React, { useState } from "react";
import Card from "@/components/Card";
import * as S from "./styles";

const PartnerDashboard = () => {
  const { data: benefitData, isLoading: isBenefitLoading } = useFetch("http://localhost:8080/benefit");

  const handleEditBenefit = (benefitId: string) => {
    Router.push(`/benefit/${benefitId}/edit`);
  };

  const deleteBenefit = (benefitId: string) => {
    handleDelete(benefitId);
  };


  return (
    <PartnerLayout>
      <PageHeader title="Benefícios" redirectAction={"Novo +"} backAction={""} coins={""}/>
      <S.Wrapper>
       {isBenefitLoading
        ? "Carregando..."
        : benefitData?.data.map((student: any) => (
            <Card
              key={student.id}
              children={""}
              title={student.name}
              name={student.name}
              onGiveCoins={""}
              onEdit={() => handleEditBenefit(benefit.id)}
              onDelete={() => deleteBenefit(benefit.id)}

            />
          ))}
            </S.Wrapper>
    </PartnerLayout>
  );
};

export default PartnerDashboard;
