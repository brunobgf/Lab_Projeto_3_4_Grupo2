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
          const { user_role } = data; // get the user's role from the response data
          if (user_role === "Partner") {
            Router.push("/partner-dashboard"); // redirect to partner dashboard if user is a Partner
          } else if (user_role === "Student") {
            Router.push("/student-dashboard"); // redirect to student dashboard if user is a Student
          } else {
            Router.push("/dashboard");
          } // redirect to a default dashboard if the user's role is not recogniz
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
