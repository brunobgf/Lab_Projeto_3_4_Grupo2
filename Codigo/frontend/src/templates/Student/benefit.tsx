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

const StudentBenefits = () => {
  const { data: coinData, isLoading } = useFetch("http://localhost:8080/coin/byStudent/1");
  const { data: benefitData, isLoading: isBenefitLoading } = useFetch("http://localhost:8080/benefit");
  const { handleDelete } = useStudentData();
  const handleShowBenefit = (benefitId: string) => {
    Router.push(`/partner/benefit/${benefitId}/show`);
  };


  let coins = 0;

    coinData?.data.map((coin: any) => (
      coins = coins + coin.amount))

  console.log(coinData?.data);


  return (
    <StudentLayout>
      <PageHeader title="Benefícios" redirectAction={""} backAction={""} coins={coins}/>
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
           {/* <Card
              key={"benefit.id"}
              children={""}
              title={"benefit.name"}
              name={"benefit.name"}
              onEdit={""}
              onDelete={""}
              onShowBenefit={() => handleShowBenefit("benefit.id")}
              /> */}

      </S.Wrapper>
    </StudentLayout>
  );
};

export default StudentBenefits;

