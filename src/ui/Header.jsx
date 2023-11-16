import styled from "styled-components";
import { HiBars3CenterLeft, HiEnvelope, HiBell } from "react-icons/hi2";
import Row from "./Row";
import { NavLink } from "react-router-dom";
import Badge from "./Badge";
import Avatar from "./Avatar";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeader = styled.div`
  height: 6rem;
  padding: 1.6rem 2.4rem;
  background-color: var(--color-indigo-100);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-grey-800);
`;

const StyledIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  border-radius: 50%;
  border: none;
  color: var(--color-grey-800);

  &:hover {
    color: var(--color-brand-50);
    background-color: var(--color-brand-200);
    outline: 0.5rem solid var(--color-brand-200);
  }
`;

const StyledNavLink = styled(NavLink)`
  transition: color 0.2s;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledRowIcons = styled(Row)`
  justify-self: end;

  & > * {
    cursor: pointer;
    margin: auto 1.6rem;
  }
`;

function Header({ toggleSidebar }) {
  return (
    <StyledHeader>
      <Row $gap="2rem">
        <StyledIcon onClick={toggleSidebar}>
          <HiBars3CenterLeft size={24} />
        </StyledIcon>
        <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
        <StyledNavLink to="/users">Users</StyledNavLink>
        <StyledNavLink to="/settings">Settings</StyledNavLink>
      </Row>
      <StyledRowIcons>
        <DarkModeToggle></DarkModeToggle>
        <Badge value={10} state="info">
          <StyledIcon>
            <HiBell size={24} />
          </StyledIcon>
        </Badge>
        <Badge value={5} state="warning">
          <StyledIcon>
            <HiEnvelope size={24} />
          </StyledIcon>
        </Badge>
        <Avatar />
      </StyledRowIcons>
    </StyledHeader>
  );
}

export default Header;
