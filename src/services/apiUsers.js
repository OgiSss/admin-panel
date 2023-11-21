import axios from "axios";

export async function getUsers(filter) {
  let url = `${import.meta.env.VITE_API_URL}api/clients`;
  if (filter) {
    url =
      url +
      `?filters[$or][0][name][$contains]=${encodeURIComponent(
        filter
      )}&filters[$or][1][surname][$contains]=${encodeURIComponent(
        filter
      )}&filters[$or][2][email][$contains]=${encodeURIComponent(filter)}`;
  }

  return axios.get(url);
}

export async function deleteUser(id) {
  return axios.delete(`${import.meta.env.VITE_API_URL}api/clients/${id}`);
}

export async function editUsers(user) {
  return axios.put(`${import.meta.env.VITE_API_URL}api/clients/${user.id}`, {
    data: user,
  });
}

export async function addUser(user) {
  return axios.post(`${import.meta.env.VITE_API_URL}api/clients/`, {
    data: user,
  });
}
