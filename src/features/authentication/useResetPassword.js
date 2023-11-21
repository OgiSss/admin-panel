import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useResetPassword() {
  const navigate = useNavigate();
  const { isLoading, mutate } = useMutation({
    mutationFn: ({ password, confirmationPassword, code }) =>
      resetPassword({ password, confirmationPassword, code }),
    onSuccess: () => {
      navigate("/login", { replace: true });
      toast.success("The password has been changed");
    },
    onError: (err) => {
      toast.error(`Something went wrong ${err.status}`);
    },
  });

  return { isLoading, resetPassword: mutate };
}
