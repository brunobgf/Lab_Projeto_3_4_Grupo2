import { useMultimethodMutation } from "@/utils/reactQuery";
import Router from "next/router";
import toast from "react-hot-toast";
import apiRoutes from "../routes";

export const usePatientData = () => {
  const patientMutation = useMultimethodMutation(apiRoutes.patient.base);
  const patientByIdMutation = useMultimethodMutation(
    apiRoutes.patient.patientById,
    {},
    apiRoutes.patient.base
  );

  const handleAdd = (
    name: string,
    email: string,
    birth_date: string,
    city: string,
    state: string,
    district: string,
    country: string
  ) => {
    patientMutation.mutate(
      {
        data: { name, email, birth_date, city, state, district, country },
        method: "POST",
      },
      {
        onSuccess: ({ data }) => {
          toast.success("Cadastro realizado com sucesso.");
          Router.push("/patient");
        },
        onError: (err: any) => {
          toast.error("Erro no cadastro.");
        },
      }
    );
  };

  const handleEdit = (
    patientId: string,
    name: string,
    email: string,
    birth_date: string,
    city: string,
    state: string,
    district: string,
    country: string
  ) => {
    patientByIdMutation.mutate(
      {
        data: { name, email, birth_date, city, state, district, country },
        method: "PUT",
        additionalQuery: patientId,
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

  const handleDelete = (patientId: string) => {
    patientByIdMutation.mutate(
      { method: "DELETE", additionalQuery: patientId },
      {
        onSuccess: () => {
          toast.success("Paciente excluido com sucesso");
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
