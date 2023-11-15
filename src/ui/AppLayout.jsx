import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { useState } from "react";
import Divider from "./Divider";
import Breadcrumbs from "./Breadcrumbs";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 6rem 1fr;
  grid-template-areas: "sidebar header" "sidebar content";
  height: 100vh;
  transition: all2s;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 2.4rem;
  overflow: scroll;
  grid-area: content;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const StyledHeader = styled.div`
  grid-area: header;
`;

const StyledSidebar = styled(Sidebar)`
  grid-area: sidebar;
`;

function AppLayout() {
  const [isOpen, setOpen] = useState(false);

  function toggleSidebar() {
    setOpen((value) => !value);
  }

  return (
    <StyledAppLayout $isActive={isOpen}>
      <StyledHeader>
        <Header toggleSidebar={toggleSidebar} />
        <Divider />
        <Breadcrumbs />
      </StyledHeader>

      <StyledSidebar isOpen={isOpen} />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
