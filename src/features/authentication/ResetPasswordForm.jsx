import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";
import FormRow from "../../ui/FormRow";
import { useResetPassword } from "./useResetPassword";
import { useSearchParams } from "react-router-dom";

function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [searchParams] = useSearchParams();

  const { isLoading, resetPassword } = useResetPassword();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !password ||
      !confirmationPassword ||
      !(confirmationPassword === password)
    )
      return;
    const code = searchParams.get("code");
    resetPassword(
      { password, confirmationPassword, code },
      {
        onSettled: () => {
          setPassword("");
          setConfirmationPassword("");
        },
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Password">
        <Input
          type="password"
          id="password"
          name="password"
          autoComplete="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRow>

      <FormRow label="confirmationPassword">
        <Input
          type="confirmationPassword"
          id="confirmationPassword"
          name="confirmationPassword"
          autoComplete="confirmationPassword"
          value={confirmationPassword}
          onChange={(e) => setConfirmationPassword(e.target.value)}
        />
      </FormRow>
      <Button type="submit" size="large" disabled={isLoading}>
        {!isLoading ? "Reset password" : <SpinnerMini />}
      </Button>
    </Form>
  );
}

export default ResetPasswordForm;
