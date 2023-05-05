import Button from "@/components/Button";
import TextField from "@/components/TextField";
import { VSpace } from "@/components/VSpace/styles";
import { useFormTemplate } from "@/hooks/useForm";
import router, { useRouter } from "next/router";
import * as S from "./styles";
import { useStudentData } from "@/services/api/student";
import apiRoutes from "@/services/routes";
import { useFetch } from "@/utils/reactQuery";
import FormLayout from "@/components/FormLayout";
import FormPageHeader from "@/components/FormPageHeader";



const defaultValues = {
 name: "",
 email: "",
 cpf: "",
 rg: "",
 institute: "",
 course: "",
 login: "",
 password: "",
};

const CoinGiveway = () => {
  const { handleAdd, handleEdit } = useStudentData();
  const { query } = useRouter();

  const { values, handleChange, setValues } = useFormTemplate(
    defaultValues,
    {}
  );

  const router = useRouter();


  let { isLoading } = useFetch(
    query.studentId ? apiRoutes.student.studentById + query.studentId : "",
    {},
    {
      onSuccess: ({ data }: any) => {
        setValues({ ...data});
      },
    }
  );

  const testToast = () => {
    query.studentId
      ? handleEdit(
        String(query.studentId),
        values.name,
        values.email,
        values.cpf,
        values.rg,
        values.institute,
        values.course,
        values.login,
        values.password,

      )
      : handleAdd(
        values.name,
        values.email,
        values.cpf,
        values.rg,
        values.institute,
        values.course,
        values.login,
        values.password,

      );
  };


  return (
    <FormLayout>
      <FormPageHeader title="Enviar moedas" backAction={'/professor/dashboard'} />

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
            label="Quantidade de moedas"
            value={values.email}
            onChange={handleChange("email")}
          />
         <TextField
            label="Motivo de envio"
            value={values.email}
            onChange={handleChange("email")}
          />
     

          <VSpace height={30} />
          <Button onClick={testToast}>Salvar</Button>
        </>
      )}
    </FormLayout>
  );
};

export default CoinGiveway;
