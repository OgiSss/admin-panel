import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

const Label = styled.label`
  font-size: 1.6rem;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRow({ label, children, errors, direction }) {
  return (
    <StyledFormRow $direction={direction}>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {errors &&
        errors.map((error, index) => <Error key={index}>{error}</Error>)}
    </StyledFormRow>
  );
}

FormRow.defaultProps = {
  direction: "column",
};

export default FormRow;
