import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";
import FormRow from "../../ui/FormRow";
import { useLogin } from "./useLogin";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: var(--color-brand-500);
  text-align: ${({ align }) => align};

  &:hover {
    text-decoration: underline;
  }
`;

function LoginForm() {
  const [username, setUsername] = useState("kumoroskar@gmail.com");
  const [password, setPassword] = useState("k44DaYJeRL9h5xEm4#d@");

  const { loading: isLoading, login } = useLogin();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) return;
    login(
      { username, password },
      {
        onSettled: () => {
          setUsername("");
          setPassword("");
        },
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Username">
        <Input
          type="text"
          id="username"
          name="username"
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormRow>
      <FormRow label="Password">
        <Input
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRow>
      <FormRow direction="row">
        <StyledLink to="/sign-up">Sign up</StyledLink>
        <StyledLink align="right" to="/forgot-password">
          Forgot password
        </StyledLink>
      </FormRow>
      <Button type="submit" size="large" disabled={isLoading}>
        {!isLoading ? "Log in" : <SpinnerMini />}
      </Button>
    </Form>
  );
}

export default LoginForm;
