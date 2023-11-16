import styled from "styled-components";

const StyledTag = styled.div`
  padding: 0.8rem 1.5rem;
  background-color: var(--color-green-700);
  display: inline;
  width: fit-content;
  border-radius: 1rem;
  color: var(--color-grey-300);
`;

function Tag({ children }) {
  return <StyledTag>{children}</StyledTag>;
}

export default Tag;
