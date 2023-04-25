import { useMultimethodMutation } from "@/utils/reactQuery";
import Router from "next/router";
import toast from "react-hot-toast";
import apiRoutes from "../routes";

export const useStudentData = () => {
  const studentMutation = useMultimethodMutation(apiRoutes.student.base);
  const studentByIdMutation = useMultimethodMutation(
    apiRoutes.student.studentById,
    apiRoutes.student.base
  );

  const handleAdd = (
    name:string,
    email:string,
    cpf:string,
    rg:string,
    institute:string,
    course:string,
    login:string,
    password:string,
  ) => {
    studentMutation.mutate(
      {
        data: { name, email, cpf, rg, institute, course, login, password },
        method: "POST",
      },
      {
        onSuccess: ({ data }) => {
          toast.success("Cadastro realizado com sucesso.");
          Router.push("/student");
        },
        onError: (err: any) => {
          toast.error("Erro no cadastro.");
        },
      }
    );
  };

  const handleEdit = (
    studentId: string,
    name:string,
    email:string,
    cpf:string,
    rg:string,
    institute:string,
    course:string,
    login:string,
    password:string,
  ) => {
    studentByIdMutation.mutate(
      {
        data: { name, email, cpf, rg, institute, course, login, password  },
        method: "PUT",
        additionalQuery: studentId,
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

  const handleDelete = (studentId: string) => {
    studentByIdMutation.mutate(
      { method: "DELETE", additionalQuery: studentId },
      {
        onSuccess: () => {
          toast.success("Estudante excluido com sucesso");
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
