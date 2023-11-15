import styled from "styled-components";

const StyledTile = styled.div`
  min-height: 20rem;
  min-width: 20rem;
  width: 100%;
  background-color: var(--color-brand-500);
  display: inline-block;
  padding: 1.6rem;
  border-radius: 10px;
`;

function Tile({ children }) {
  return <StyledTile>{children}</StyledTile>;
}

export default Tile;
