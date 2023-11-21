import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser as addUserApi } from "../../services/apiUsers";

function useAddUser() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: addUser } = useMutation({
    mutationFn: addUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });

  return { isLoading, addUser };
}

export default useAddUser;
