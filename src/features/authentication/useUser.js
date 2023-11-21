import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function useUser() {
  const navigate = useNavigate();

  const [user] = useState(localStorage.getItem("user"));

  useEffect(() => {
    let isExpired = true;
    if (!user) {
      localStorage.removeItem("user");
      navigate("/login", { replace: true });
    }

    const userData = JSON.parse(user);

    if (userData && userData.jwt) {
      const decodedToken = jwtDecode(userData.jwt);
      const today = dayjs();
      const expirationDate = dayjs(new Date(decodedToken.exp * 1000));
      isExpired = today.isAfter(expirationDate);
      if (isExpired) {
        localStorage.removeItem("user");
        navigate("/login", { replace: true });
      }
    }
  }, [user, navigate]);

  return user;
}

export default useUser;
