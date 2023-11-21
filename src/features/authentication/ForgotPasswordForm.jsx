import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";
import FormRow from "../../ui/FormRow";
import useForgotPassword from "./useForgotPassword";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("raksook@gmail.com");

  const { isLoading, forgotPassword } = useForgotPassword();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) return;
    forgotPassword(
      { email },
      {
        onSettled: () => {
          setEmail("");
        },
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email">
        <Input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRow>
      <Button type="submit" size="large" disabled={isLoading}>
        {!isLoading ? "Forgot password" : <SpinnerMini />}
      </Button>
    </Form>
  );
}

export default ForgotPasswordForm;
