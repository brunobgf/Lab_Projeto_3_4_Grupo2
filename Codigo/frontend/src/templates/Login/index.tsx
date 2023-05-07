import Button from "@/components/Button";
import RedirectButton from "@/components/Button/RedirectButton";
import FormLayout from "@/components/FormLayout";
import Layout from "@/components/Layout";
import TextField from "@/components/TextField";
import { VSpace } from "@/components/VSpace/styles";
import { useFormTemplate } from "@/hooks/useForm";
import { useAuthenticate } from "@/services/api/login";
import Router from "next/router";
import toast from "react-hot-toast";

const defaultValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { values, handleChange } = useFormTemplate(defaultValues, {});

  const { handleLogin, handleLogout, handleForgotPassword } = useAuthenticate();

  const login = async () => {
    handleLogin(values.email, values.password);
  };
  
  return (
    <FormLayout>
      <TextField
        label="Email"
        value={values.email}
        onChange={handleChange("email")}
      />
      <TextField
        label="Senha"
        type="password"
        value={values.password}
        onChange={handleChange("password")}
      />
      <Button onClick={login}>Entrar</Button>

    </FormLayout>
  );
};

export default Login;
