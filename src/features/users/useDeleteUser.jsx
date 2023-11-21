import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser as deleteUserApi } from "../../services/apiUsers";
import toast from "react-hot-toast";

function useDeleteUser() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: deleteUser } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      toast.success("User has been deleted");

      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteUser, isLoading };
}

export default useDeleteUser;
