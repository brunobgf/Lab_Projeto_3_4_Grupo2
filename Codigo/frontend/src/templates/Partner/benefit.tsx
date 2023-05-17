/* eslint-disable react/no-children-prop */

import PartnerLayout from "@/components/Layout/PartnerLayout";
import PageHeader from "@/components/PageHeader";
import { useBenefitData } from "@/services/api/benefit";
import { useFetch } from "@/utils/reactQuery";
import Router from "next/router";
import React, { useState } from "react";
import Card from "@/components/Card";
import * as S from "./styles";

const PartnerDashboard = () => {
  const { data: benefitData, isLoading: isBenefitLoading } = useFetch("http://localhost:8080/benefit");

  const { handleDeleteBenefit } = useBenefitData();

  const handleEditBenefit = (benefitId: string) => {
    Router.push(`/partner/benefit/${benefitId}/edit`);
  };

  const deleteBenefit = (benefitId: string) => {
    handleDeleteBenefit(benefitId);
  };


  return (
    <PartnerLayout>
      <PageHeader title="Benefícios" redirectAction={"/partner/benefit/new"} backAction={""} coins={""}/>
      <S.Wrapper>
       {isBenefitLoading
        ? "Carregando..."
        : benefitData?.data.map((benefit: any) => (
            <Card
              key={benefit.id}
              children={""}
              title={benefit.name}
              name={benefit.name}
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
