import { useMultimethodMutation } from "@/utils/reactQuery";
import Router from "next/router";
import toast from "react-hot-toast";
import apiRoutes from "../routes";

export const usePartnerData = () => {
  const partnerMutation = useMultimethodMutation(apiRoutes.partner.base);
  const partnerByIdMutation = useMultimethodMutation(
    apiRoutes.partner.partnerById,
    apiRoutes.partner.base
  );

  const handleAdd = (
    name:string,
    email:string,
    cpf:string,
    login:string,
    password:string,
    coins: string,
  ) => {
    partnerMutation.mutate(
      {
        data: { name, email, cpf, login, password, coins },
        method: "POST",
      },
      {
        onSuccess: ({ data }) => {
          toast.success("Cadastro realizado com sucesso.");
          Router.push("/partner");
        },
        onError: (err: any) => {
          toast.error("Erro no cadastro.");
        },
      }
    );
  };

  const handleEdit = (
    partnerId: string,
    name:string,
    email:string,
    cpf:string,
    login:string,
    password:string,
    coins: string, 
  ) => {
    partnerByIdMutation.mutate(
      {
        data: {  name, email, cpf, login, password, coins  },
        method: "PUT",
        additionalQuery: partnerId,
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

  const handleDelete = (partnerId: string) => {
    partnerByIdMutation.mutate(
      { method: "DELETE", additionalQuery: partnerId },
      {
        onSuccess: () => {
          toast.success("Parceiro excluido com sucesso");
        },
        onError: () => {
          toast.error("Erro");
        },
      }
    );
  };

  const handleRead = () => {};

  return { handleAdd, handleEdit, handleDelete, handleRead };
};
