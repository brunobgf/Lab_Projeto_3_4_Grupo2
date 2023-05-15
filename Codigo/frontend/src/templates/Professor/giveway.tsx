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
import Router from "next/router";
import toast from "react-hot-toast";
import Joi from "joi";



const defaultValues = {
 coins: "",
 motivation: "",
};

const CoinGiveway = () => {
  const { handleAdd, handleEdit } = useStudentData();
  const {handleAddCoin} = useProfessorData();

  const { query } = useRouter();

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

  const fieldsValidations = {
    coins: Joi.number().min(0).required().messages({
      "number.base": `O campo de moedas precisa ser um número`,
      "number.min": `O campo de moedas não pode ser negativo`,
      "number.max": `O campo de moedas é superior ao que existe de moedas disponíveis`,
      "any.required": `Este campo é obrigatório`,
    }),
    motivation: Joi.string().required().messages({
      "string.empty": `Este campo é obrigatório`,
    }),
  };

  const { values, handleChange, setValues, handleAddCoins, formValidate, errors } = useFormTemplate(
    defaultValues,
    fieldsValidations,
    {}
  );

 
  function validaCampos(){
    if (values.coins <= 0) {
      toast.error("Quantidade de moedas deve ser maior que 0.");
      return false;
    }

    if (!values.motivation){
      toast.error("Motivo do envio deve ser preenchido.");
      return false;
    }

    return true;
  }

  function justNumbers(e: any){
    var charCode = e.charCode ? e.charCode : e.keyCode;

    if (charCode != 8 && charCode != 9) {
        if (charCode < 48 || charCode > 57) {
            return false;
        }
    }

  }


  const testToast = () => {

    if (!validaCampos())
      return;

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
      Router.reload()
      Router.push("/professor/dashboard")   
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
            error={errors.coins && errors.coins}
          />
         <TextField
            label="Motivo de envio"
            onChange={handleChange("motivation")}
            error={errors.motivation && errors.motivation}
          />
     
          <VSpace height={30} />
          <Button onClick={testToast}>Salvar</Button>
        </>
      )}
    </FormLayout>
  );
};

export default CoinGiveway;
