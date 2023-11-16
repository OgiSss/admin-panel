import styled from "styled-components";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import Divider from "../../ui/Divider";
import Row from "../../ui/Row";
import Button from "../../ui/Button";

const StyledTodaysActivity = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
`;

const StyledRow = styled(Row)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

function TodaysActivity() {
  return (
    <StyledTodaysActivity>
      <Heading as="h2">Todays activity</Heading>
      <Divider margin="1rem 0 1rem 0 " />
      <StyledRow $gap="1rem">
        <Tag>Active</Tag>
        <span>Oskar K</span>
        <span>10 nights</span>
        <Button>Check details</Button>
      </StyledRow>
      <Divider margin="1rem 0 1rem 0 " />
      <StyledRow $gap="1rem">
        <Tag>Active</Tag>
        <span>Oskar K</span>
        <span>10 nights</span>
        <Button>Check details</Button>
      </StyledRow>
      <Divider margin="1rem 0 1rem 0 " />
      <StyledRow $gap="1rem">
        <Tag>Active</Tag>
        <span>Oskar K</span>
        <span>10 nights</span>
        <Button>Check details</Button>
      </StyledRow>
      <Divider margin="1rem 0 1rem 0 " />
    </StyledTodaysActivity>
  );
}

export default TodaysActivity;
