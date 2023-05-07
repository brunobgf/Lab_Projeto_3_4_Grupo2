import { useMultimethodMutation } from "@/utils/reactQuery";
import Router from "next/router";
import toast from "react-hot-toast";

export const useAuthenticate = () => {
  const authMutation = useMultimethodMutation(
    "http://localhost:8080/auth/login"
  );

  const handleLogin = (email: string, password: string) => {
    authMutation.mutate(
      { data: { email, password }, method: "POST" },
      {
        onSuccess: ({ data }) => {
          toast.success("Login realizado com sucesso");
          //window.sessionStorage.setItem("sessionToken", data.sessionToken);
          const { user_role } = data; 
          switch (user_role) {
            case "1":
              Router.push("/partner/dashboard");
              break;
            case "2": 
            Router.push("/professor/dashboard");
            break;
            case "3":
              Router.push("/student/dashboard");
              break;
            default:
              Router.push("/dashboard");
              break;
            }
        },
        onError: () => {
          toast.error("Erro no login");
        },
      }
    );
  };

  const handleLoginPromise = async (email: string, password: string) => {
    try {
      const res = await authMutation.mutateAsync({
        method: "POST",
        data: { email, password },
      });

      return res.data;
    } catch {
      toast.error("Erro no login");
    }
  };

  const handleLogout = () => {};

  const handleForgotPassword = () => {};

  return {
    handleLogin,
    handleLogout,
    handleForgotPassword,
    handleLoginPromise,
  };
};
