import { useMultimethodMutation } from "@/utils/reactQuery";
import Router from "next/router";
import toast from "react-hot-toast";
import apiRoutes from "../routes";

export const useBenefitData = () => {
  const benefitMutation = useMultimethodMutation(apiRoutes.benefit.base);
  const benefitByIdMutation = useMultimethodMutation(
    apiRoutes.benefit.benefitById,
    apiRoutes.benefit.base
  );

  const handleAddBenefit = (
    name:string,
    price:string,
    description:string,
    image:string,
    id_partner:string
  ) => {
    benefitMutation.mutate(
      {
        data: { name, price, description, image,  partner: {id: id_partner}},
        method: "POST",
      },
      {
        onSuccess: ({ data }) => {
          toast.success("Cadastro realizado com sucesso.");
          Router.push("/benefit");
        },
        onError: (err: any) => {
          toast.error("Erro no cadastro.");
        },
      }
    );
  };

  const handleEditBenefit = (
    benefitId: string,
    name:string,
    price:string,
    description:string,
    image:string,
    id_partner:string
  ) => {
    benefitByIdMutation.mutate(
      {
        data: {  name, price, description, image, partner: {id: id_partner}},
        method: "PUT",
        additionalQuery: benefitId,
      },
      {
        onSuccess: ({ data }) => {
          toast.success("Atualização realizada com sucesso.");
        },
        onError: (err: any) => {
          toast.error("Erro ao atualizar.");
        },
      }
    );
  };

  const handleDeleteBenefit = (benefitId: string) => {
    benefitByIdMutation.mutate(
      { method: "DELETE", additionalQuery: benefitId },
      {
        onSuccess: () => {
          toast.success("Benefício excluido com sucesso");
        },
        onError: () => {
          toast.error("Erro");
        },
      }
    );
  };

  const handleRead = () => {};

  return { handleAddBenefit, handleEditBenefit, handleDeleteBenefit, handleRead };
};
