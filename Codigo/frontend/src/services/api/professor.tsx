import { useMultimethodMutation } from "@/utils/reactQuery";
import Router from "next/router";
import toast from "react-hot-toast";
import apiRoutes from "../routes";

export const useProfessorData = () => {
  const professorMutation = useMultimethodMutation(apiRoutes.professor.base);
  const professorByIdMutation = useMultimethodMutation(
    apiRoutes.professor.professorById,
    apiRoutes.professor.base
  );

  const handleAddProfessor = (
    name:string,
    email:string,
    cpf:string,
    login:string,
    password:string,
    coins: string,
  ) => {
    professorMutation.mutate(
      {
        data: { name, email, cpf, login, password, coins },
        method: "POST",
      },
      {
        onSuccess: ({ data }) => {
          toast.success("Cadastro realizado com sucesso.");
          Router.push("/professor");
        },
        onError: (err: any) => {
          toast.error("Erro no cadastro.");
        },
      }
    );
  };

  const handleEditProfessor = (
    professorId: string,
    name:string,
    email:string,
    cpf:string,
    login:string,
    password:string,
    coins: string, 
  ) => {
    professorByIdMutation.mutate(
      {
        data: {  name, email, cpf, login, password, coins  },
        method: "PUT",
        additionalQuery: professorId,
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

  const handleDeleteProfessor = (professorId: string) => {
    professorByIdMutation.mutate(
      { method: "DELETE", additionalQuery: professorId },
      {
        onSuccess: () => {
          toast.success("Professor excluido com sucesso");
        },
        onError: () => {
          toast.error("Erro");
        },
      }
    );
  };

  const handleReadProfessor = () => {};

  return { handleAddProfessor, handleEditProfessor, handleDeleteProfessor, handleReadProfessor };
};
