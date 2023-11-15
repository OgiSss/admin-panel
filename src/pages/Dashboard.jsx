// import DashboardLayout from "../features/dashboard/DashboardLayout";
// import DashboardFilter from "../features/dashboard/DashboardFilter";
// import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Tile from "../ui/Tile";
import Heading from "../ui/Heading";
import styled from "styled-components";

const StyledHeading = styled(Heading)`
  color: var(--color-brand-50);
`;

const StyledHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-right: 1rem;
  }
`;

function Dashboard() {
  return (
    <Row $gap="1.6rem">
      <Tile>
        <StyledHeadingWrapper>
          <StyledHeading as="h1">26K</StyledHeading>
          <StyledHeading as="h2"> (-12.4% &darr;)</StyledHeading>
        </StyledHeadingWrapper>
        <StyledHeading as="h3">Users</StyledHeading>
      </Tile>

      <Tile>
        <Heading as="h2">Heading</Heading>
      </Tile>

      <Tile>
        <Heading as="h2">Heading</Heading>
      </Tile>

      <Tile>
        <Heading as="h2">Heading</Heading>
      </Tile>
    </Row>
  );
}

export default Dashboard;
