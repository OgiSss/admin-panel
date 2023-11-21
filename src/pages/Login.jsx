import styled from "styled-components";
import Heading from "../ui/Heading";
import LoginForm from "../features/authentication/LoginForm";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const confirmation = searchParams.get("confirmation");

  const user = localStorage.getItem("user");

  useEffect(() => {
    if (confirmation) {
      setTimeout(() => {
        toast.success("The email has been confirmed");
      }, 0);
    }
  }, [confirmation]);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <LoginLayout>
      {/* <Logo /> */}
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
