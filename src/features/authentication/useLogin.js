import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ username, password }) => loginApi({ username, password }),
    mutationKey: ["user"],
    onSuccess: (data) => {
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      toast.error(`Provided username or password are incorrect ${err.message}`);
    },
  });

  return { login, isLoading };
}
