import styled from "styled-components";
import Heading from "../ui/Heading";
import ForgotPasswordForm from "../features/authentication/ForgotPasswordForm";

const StyledForgotPassword = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function ForgotPassword() {
  return (
    <StyledForgotPassword>
      <Heading as="h4">Log in to your account</Heading>
      <ForgotPasswordForm />
    </StyledForgotPassword>
  );
}

export default ForgotPassword;
