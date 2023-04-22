import Button from "@/components/Button";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import TextField from "@/components/TextField";
import { VSpace } from "@/components/VSpace/styles";
import { useFormTemplate } from "@/hooks/useForm";
import { useRouter } from "next/router";
import * as S from "./styles";
import toast from "react-hot-toast";
import { usePatientData } from "@/services/api/student";
import apiRoutes from "@/services/routes";
import { useFetch } from "@/utils/reactQuery";
import { useState } from "react";



const defaultValues = {
  name: "",
  email: "",
  birth_date: "",
  district: "",
  city: "",
  state: "",
  country: "",
};

const RegisterStudent = () => {
  const { handleAdd, handleEdit } = usePatientData();
  const { query } = useRouter();

  const { values, handleChange, setValues } = useFormTemplate(
    defaultValues,
    {}
  );

  let { isLoading } = useFetch(
    query.patientId ? apiRoutes.patient.patientById + query.patientId : null,
    {},
    {
      onSuccess: ({ data }: any) => {
        setValues({ ...data[0], birth_date: data[0].birthDate.split("T")[0] });
      },
    }
  );

  const testToast = () => {
    query.patientId
      ? handleEdit(
        String(query.patientId),
        values.name,
        values.email,
        values.birth_date,
        values.city,
        values.state,
        values.district,
        values.country
      )
      : handleAdd(
        values.name,
        values.email,
        values.birth_date,
        values.city,
        values.state,
        values.district,
        values.country
      );
  };


  const [isModalOpen, setIsModalOpen] = useState(false);

const handleOpenModal = () => setIsModalOpen(true);
const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Layout>
      <PageHeader backAction={"/student"} title="Registrar patiente" />
      {isLoading ? (
        "carregando"
      ) : (
        <>
          <TextField
            label="Nome"
            value={values.name}
            onChange={handleChange("name")}
          />
          <TextField
            label="Email"
            value={values.email}
            onChange={handleChange("email")}
          />
          <TextField
            label="Data de Nascimento"
            value={values.birth_date}
            onChange={handleChange("birth_date")}
          />
          <S.TextFieldWrapper>
            <TextField
              label="País"
              value={values.country}
              onChange={handleChange("country")}
            />
            <TextField
              label="Estado"
              value={values.state}
              onChange={handleChange("state")}
            />
          </S.TextFieldWrapper>
          <S.TextFieldWrapper>
            <TextField
              label="Cidade"
              value={values.city}
              onChange={handleChange("city")}
            />
            <TextField
              label="Bairro"
              value={values.district}
              onChange={handleChange("district")}
            />
          </S.TextFieldWrapper>

          <VSpace height={40} />
          <Button onClick={testToast}>Salvar</Button>
        </>
      )}
    </Layout>
  );
};

export default RegisterStudent;
