import Button from "@/components/Button";
import TextField from "@/components/TextField";
import { VSpace } from "@/components/VSpace/styles";
import { useFormTemplate } from "@/hooks/useForm";
import router, { useRouter } from "next/router";
import * as S from "./styles";
import { useStudentData } from "@/services/api/student";
import { useProfessorData } from "@/services/api/professor";

import apiRoutes from "@/services/routes";
import { useFetch } from "@/utils/reactQuery";
import FormLayout from "@/components/FormLayout";
import FormPageHeader from "@/components/FormPageHeader";



const defaultValues = {
 coins: "",
 motivation: "",
};

const CoinGiveway = () => {
  const { handleAdd, handleEdit } = useStudentData();
  const { handleEditProfessor, handleAddCoin} = useProfessorData();

  const { query } = useRouter();

  const { values, handleChange, setValues, handleAddCoins } = useFormTemplate(
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

  const { data: professorData, isLoading: isProfessorLoading } = useFetch("http://localhost:8080/professor/1");
  
  const professorCoins = professorData?.data.coin_balance;

  const testToast = () => {

    handleAddCoin(
      String(query.studentId),
      values.id,
      values.motivation,
      values.coins
    )

      handleEdit(
        String(query.studentId),
        values.name,
        values.email,
        values.cpf,
        values.rg,
        values.institute,
        values.course,
        values.login,
        values.password,
        values.coins,
        values.motivation,
      )
      handleEditProfessor(   
      String(query.studentId),
      values.name,
      values.email,
      values.cpf,
      values.login,
      values.password,
      values.coin_balance,
      values.departament,
      values.institution
      ) 
  };


  return (
    <FormLayout>
      <FormPageHeader title="Enviar moedas" backAction={'/professor/dashboard'} redirectAction={""} />

      {isLoading ? (
        "carregando"
      ) : (
        <>
          <TextField
            label="Quantidade de moedas"
            onChange={handleAddCoins("coins")}
          />
         <TextField
            label="Motivo de envio"
            onChange={handleChange("motivation")}
          />
     
          <VSpace height={30} />
          <Button onClick={testToast}>Salvar</Button>
        </>
      )}
    </FormLayout>
  );
};

export default CoinGiveway;
