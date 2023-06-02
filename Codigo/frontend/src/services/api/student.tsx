import { useMultimethodMutation } from "@/utils/reactQuery";
import Router from "next/router";
import toast from "react-hot-toast";
import apiRoutes from "../routes";

export const useStudentData = () => {
  const studentMutation = useMultimethodMutation(apiRoutes.student.base);
  const benefitStudent = useMultimethodMutation(apiRoutes.benefitStudent.base);
  const extract = useMultimethodMutation(apiRoutes.extract.base);
  const studentByIdMutation = useMultimethodMutation(
    apiRoutes.student.studentById,
    apiRoutes.student.base
  );

  const handleAddBenefitStudent = (
    id_benefit: any,
    id_student: any    
  ) => {
    benefitStudent.mutate(
      {
        data: { 
          benefit: {id: id_benefit}, 
          id_student 
        },
        method: "POST",
      },
      {
        onSuccess: ({ data }) => {
          toast.success("Benefício gravado com sucesso.");
        },
        onError: (err: any) => {
          toast.error("Erro ao gravar benefício para estudante.");
        },
      }
    );
  };

  const handleAdd = (
    name:string,
    email:string,
    cpf:string,
    rg:string,
    institute:string,
    course:string,
    login:string,
    password:string,
    coins: string,
    motivation: string,
  ) => {
    studentMutation.mutate(
      {
        data: { name, email, cpf, rg, institute, course, login, password, coins, motivation },
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

  const handleExtract = (studentId: string) => {
    extract.mutate(
      {
        data: {
          id: studentId,
          student: "true" 
        },
        method: "POST",
      },
      {
        onSuccess: ({ data }) => {
          toast.success("Extrato salvo com sucesso.");
        },
        onError: (err: any) => {
          toast.error("Erro ao gravar extrato.");
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
    coins: string,
    motivation: string,
  ) => {
    studentByIdMutation.mutate(
      {
        data: { name, email, cpf, rg, institute, course, login, password, coins, motivation  },
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

  return { handleAdd, handleEdit, handleDelete, handleRead, handleAddBenefitStudent, handleExtract };
};
