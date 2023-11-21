import styled from "styled-components";
import Heading from "../ui/Heading";
import ResetPasswordForm from "../features/authentication/ResetPasswordForm";

const StyledResetPassword = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function ResetPassword() {

  return (
    <StyledResetPassword>
      <Heading as="h4">Log in to your account</Heading>
      <ResetPasswordForm />
    </StyledResetPassword>
  );
}

export default ResetPassword;
