import { useMultimethodMutation } from "@/utils/reactQuery";
import Router from "next/router";
import toast from "react-hot-toast";
import apiRoutes from "../routes";

export const useProfessorData = () => {
  const professorMutation = useMultimethodMutation(apiRoutes.professor.base);
  const coinMutation = useMultimethodMutation(apiRoutes.coin.base);
  const extract = useMultimethodMutation(apiRoutes.extract.base);
  const professorByIdMutation = useMultimethodMutation(
    apiRoutes.professor.professorById,
    apiRoutes.professor.base
  );

  const handleAddCoin = (
    id_student: string,
    id_professor: string,
    motivation: string,
    amount: string
  ) => {

    coinMutation.mutate(
      {
        data: { id_student, id_professor, motivation, amount },
        method: "POST",
      },
      {
        onSuccess: ({ data }) => {
          toast.success("Cadastro realizado com sucesso.");
          Router.push("/professor/dashboard");
        },
        onError: (err: any) => {
          toast.error("Erro no cadastro.");
        },
      }
    );

  }

  const handleExtract = (professorId: string) => {
    extract.mutate(
      {
        data: {
          id: professorId,
          student: "false" 
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

  const handleReadProfessor = () => { };

  return {handleDeleteProfessor, handleReadProfessor, handleAddCoin, handleExtract};
};
