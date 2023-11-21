import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editUsers as editUsersApi } from "../../services/apiUsers";
import toast from "react-hot-toast";

function useEditUsers() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: editUsers } = useMutation({
    mutationFn: editUsersApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);

      toast.success("A user has been edited succesfully ");
    },

    onError: () => {
      toast.error("Something went wrong");
    },
  });

  return { editUsers, isLoading };
}

export default useEditUsers;
