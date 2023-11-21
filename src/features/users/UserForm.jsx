import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import styled from "styled-components";
import SpinnerMini from "../../ui/SpinnerMini";

const StyledInput = styled(Input)`
  width: 400px;
`;

function UserForm({ isLoading, userToEdit, isEdit, onCloseModal, onConfirm }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEdit ? userToEdit : {},
  });

  const { errors } = formState;

  function onSubmit(data) {
    onConfirm?.(data);
    onCloseModal?.();
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Name" errors={[errors?.name?.message]}>
        <StyledInput
          type="text"
          id="name"
          autocomplete="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Surname" errors={[errors?.surname?.message]}>
        <StyledInput
          type="text"
          id="surname"
          autocomplete="surname"
          {...register("surname", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Phone number" errors={[errors?.phoneNumber?.message]}>
        <StyledInput
          type="tel"
          id="phoneNumber"
          autocomplete="tel"
          {...register("phoneNumber", {
            required: "This field is required",
            maxLength: 20,
          })}
        />
      </FormRow>

      <FormRow label="Email" errors={[errors?.email?.message]}>
        <StyledInput
          type="email"
          id="email"
          autocomplete="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
        />
      </FormRow>

      <FormRow direction="row">
        {/* type is an HTML attribute! */}
        <Button
          $variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button type="submit">
          {isLoading ? <SpinnerMini /> : isEdit ? "Edit user" : "Create user"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default UserForm;
