import { Form, Link } from "react-router-dom";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import styled from "styled-components";
import { useState } from "react";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import useSignup from "./useSignup";

const StyledLink = styled(Link)`
  color: var(--color-brand-500);
  text-align: ${({ align }) => align};

  &:hover {
    text-decoration: underline;
  }
`;

function SignupForm() {
  const [email, setEmail] = useState("kumoroskar@gmail.com");
  const [password, setPassword] = useState("k44DaYJeRL9h5xEm4#d@");
  const [confirmPassword, setConfirmPassword] = useState(
    "k44DaYJeRL9h5xEm4#d@"
  );

  const { loading: isLoading, signup } = useSignup();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || (!password && !(password === confirmPassword))) return;
    signup(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        },
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email">
        <Input
          type="text"
          id="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRow>
      <FormRow label="Password">
        <Input
          type="password"
          id="password"
          name="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRow>

      <FormRow label="Confirm password">
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </FormRow>
      <FormRow direction="row">
        <StyledLink align="right" to="/login">
          Log in
        </StyledLink>
      </FormRow>
      <Button type="submit" size="large" disabled={isLoading}>
        {!isLoading ? "Sign up" : <SpinnerMini />}
      </Button>
    </Form>
  );
}

export default SignupForm;
