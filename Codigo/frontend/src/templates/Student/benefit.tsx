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
import apiRoutes from "@/services/routes";

const StudentBenefits = () => {
  const { data, isLoading } = useFetch("http://localhost:8080/coin/byStudent/1");
  const { data: coinData } = useFetch(apiRoutes.student.balance + "1");
  const { data: benefitData, isLoading: isBenefitLoading } = useFetch("http://localhost:8080/benefit");
  const { handleDelete } = useStudentData();
  const handleShowBenefit = (benefitId: string) => {
    Router.push(`/partner/benefit/${benefitId}/show`);
  };

  console.log(coinData)

  return (
    <StudentLayout>
      <PageHeader title="Benefícios" redirectAction={""} backAction={""} coins={coinData?.data}/>
      <S.Wrapper>

      {isLoading
        ? "Carregando..."
        : benefitData?.data.map((benefit: any) => (
            <Card
              key={benefit.id}
              children={""}
              title={benefit.name}
              name={'Vantagem: ' + benefit.name + ' - ' + benefit.price + ' moeda(s)'}
              onEdit={""}
              onDelete={""}
              onShowBenefit={() => handleShowBenefit(benefit.id)}
            />
          ))}

      </S.Wrapper>
    </StudentLayout>
  );
};

export default StudentBenefits;

