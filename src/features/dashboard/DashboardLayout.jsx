import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import StyledTile from "../../ui/Tile";
import TodaysActivity from "../check-in-check-out/TodaysActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <Stats />
      <StyledTile>
        <TodaysActivity />
        <Spinner />
      </StyledTile>
      {/* <TodayActivity /> */}
      <DurationChart />
      <SalesChart />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
