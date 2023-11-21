import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledCheckbox = styled.div`
  display: inline-flex;
  width: 1.6rem;
  height: 1.6rem;
  background: ${(props) =>
    props.checked ? "var(--color-brand-500)" : "var(--color-brand-50)"};
  border-radius: 0.3rem;
  transition: all 150ms;
  justify-content: center;
  align-items: center;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 0.3rem #b4d5ff;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const CheckboxLabel = styled.label`
  margin-left: 1rem;
  font-size: 1.3rem;
`;

// Checkbox component
const Checkbox = ({ className, checked, onChange, label }) => (
  <CheckboxContainer className={className} onClick={onChange}>
    <HiddenCheckbox checked={checked} onChange={onChange} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
    <CheckboxLabel>{label}</CheckboxLabel>
  </CheckboxContainer>
);

export default Checkbox;
