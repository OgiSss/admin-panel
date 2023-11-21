import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2.4rem 0.8rem 0 0.8rem;
  gap: 1rem;
  justify-content: flex-end;
`;

const StyledYesNoDialog = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 10rem;
`;

function YesNoDialog({
  onCloseModal,
  onConfirm,
  confirmLabel = "Save",
  cancelLabel = "Cancel",
}) {
  function handleOnConfirm() {
    onConfirm();
    onCloseModal?.();
  }

  return (
    <StyledYesNoDialog>
      <Heading as="h3">Are you sure to remove?</Heading>
      <ButtonWrapper>
        <Button onClick={onCloseModal}>{cancelLabel}</Button>
        <Button onClick={handleOnConfirm}>{confirmLabel}</Button>
      </ButtonWrapper>
    </StyledYesNoDialog>
  );
}

export default YesNoDialog;
