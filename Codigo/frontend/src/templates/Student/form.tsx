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

const RegisterStudent = () => {
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
        values.coins,
        values.motivation,

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
        values.coins,
        values.motivation,

      );
  };


  return (
    <FormLayout>
      <FormPageHeader title="Estudante" backAction={() => router.back()} />

      {isLoading ? (
        "carregando"
      ) : (
        <>
          <S.TextFieldWrapper>
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
          </S.TextFieldWrapper>
        
          <S.TextFieldWrapper>
          <TextField
            label="CPF"
            value={values.cpf}
            onChange={handleChange("cpf")}
          />
          <TextField
            label="RG"
            value={values.rg}
            onChange={handleChange("rg")}
          />
              </S.TextFieldWrapper>
         
          <S.TextFieldWrapper>
            <TextField
              label="Instituição"
              value={values.institute}
              onChange={handleChange("institute")}
            />
            <TextField
              label="Curso"
              value={values.course}
              onChange={handleChange("course")}
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

export default RegisterStudent;
