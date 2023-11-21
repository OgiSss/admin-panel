import { useQuery } from "@tanstack/react-query";
import useQueryParam from "../../hooks/useQuery";
import { getUsers } from "../../services/apiUsers";

function useUsers() {
  const query = useQueryParam();
  const filter = query.get("filter");
  console.log(filter);
  const { isLoading, data } = useQuery({
    queryKey: ["users", filter],
    queryFn: () => getUsers(filter),
  });

  return { isLoading, users: data?.data };
}

export default useUsers;
