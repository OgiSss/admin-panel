import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { forgotPassword as forgotPasswordApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useForgotPassword() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: forgotPassword, isLoading } = useMutation({
    mutationFn: ({ email }) => forgotPasswordApi({ email }),
    onSuccess: () => {
      queryClient.setQueryData(["forgot-password"]);
      navigate("/login");
      toast.success(`Check out your inbox`);
    },
    onError: () => {
      toast.error(`SOmething went wrong check email`);
    },
  });

  return { forgotPassword, isLoading };
}

export default useForgotPassword;
