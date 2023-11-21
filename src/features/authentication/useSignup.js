import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signup as signupApi } from "../../services/apiAuth";

function useSignup() {
  const navigate = useNavigate();

  const { isLoading, mutate: signup } = useMutation({
    mutationFn: ({ email, password }) =>
      signupApi({ email, password, username: email }),
    mutationKey: ["signup"],
    onSuccess: () => {
      navigate("/login");
      toast.success("The account has been create. You can login now.");
    },
    onError: () => {
      toast.error("Something went wrong try it later");
    },
  });

  return { isLoading, signup };
}

export default useSignup;
