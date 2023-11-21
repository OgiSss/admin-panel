import { useMutation, useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/apiUsers";

function useSearchData() {
  const { isLoading, mutate: search } = useMutation({
    queryFn: getUsers,
  });

  return { isLoading, search };
}

export default useSearchData;
