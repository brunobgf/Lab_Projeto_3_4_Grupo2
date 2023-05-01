import Button from "@/components/Button";
import TextField from "@/components/TextField";
import { VSpace } from "@/components/VSpace/styles";
import { useFormTemplate } from "@/hooks/useForm";
import router, { useRouter } from "next/router";
import * as S from "./styles";
import { usePartnerData } from "@/services/api/partner";
import apiRoutes from "@/services/routes";
import { useFetch } from "@/utils/reactQuery";
import FormLayout from "@/components/FormLayout";
import FormPageHeader from "@/components/FormPageHeader";



const defaultValues = {
 name: "",
 email: "",
 cnpj: "",
 login: "",
 password: "",
};

const RegisterPartner = () => {
  const { handleAdd, handleEdit } = usePartnerData();
  const { query } = useRouter();

  const { values, handleChange, setValues } = useFormTemplate(
    defaultValues,
    {}
  );

  let { isLoading } = useFetch(
    query.partnerId ? apiRoutes.partner.partnerById + query.partnerId : "",
    {},
    {
      onSuccess: ({ data }: any) => {
        setValues({ ...data});
      },
    }
  );

  const testToast = () => {
    query.partnerId
      ? handleEdit(
        String(query.partnerId),
        values.name,
        values.email,
        values.cnpj,
        values.login,
        values.password,

      )
      : handleAdd(
        values.name,
        values.email,
        values.cnpj,
        values.login,
        values.password,

      );
  };


  return (
    <FormLayout>
      <FormPageHeader title="Parceiro" backAction={() => router.back()} />

      {isLoading ? (
        "carregando"
      ) : (
        <>
            <TextField
              label="Nome"
              value={values.name}
              onChange={handleChange("name")}
            />
          <S.TextFieldWrapper>

          <TextField
            label="Email"
            value={values.email}
            onChange={handleChange("email")}
          />
          <TextField
            label="CNPJ"
            value={values.cnpj}
            onChange={handleChange("cnpj")}
          />
          </S.TextFieldWrapper>
        
          <S.TextFieldWrapper>
            <TextField
              label="Login"
              value={values.login}
              onChange={handleChange("login")}
            />
            <TextField
              label="Senha"
              value={values.password}
              onChange={handleChange("password")}
            />
          
          </S.TextFieldWrapper>

          <VSpace height={30} />
          <Button onClick={testToast}>Salvar</Button>
        </>
      )}
    </FormLayout>
  );
};

export default RegisterPartner;
