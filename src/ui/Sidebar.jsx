import styled from "styled-components";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  overflow: hidden;
  transition: all 0.2s ease-in;
`;

function Sidebar({ isOpen }) {
  return (
    <StyledSidebar
      style={{
        width: isOpen ? "26rem" : "0",
        padding: isOpen ? "3.2rem 2.4rem" : "0",
        borderRight: isOpen ? "1px solid var(--color-grey-100)" : "0",
      }}
    >
      {/* <Logo /> */}
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
