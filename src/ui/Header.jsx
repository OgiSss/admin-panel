import styled from "styled-components";
import {
  HiBars3CenterLeft,
  HiMiniSun,
  HiMoon,
  HiEnvelope,
  HiBell,
} from "react-icons/hi2";
import Row from "./Row";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Badge from "./Badge";
import Avatar from "./Avatar";

const StyledHeader = styled.div`
  height: 6rem;
  padding: 1.6rem 2.4rem;
  background-color: var(--color-brand-800);
  color: var(--color-grey-200);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  border-radius: 50%;
  border: none;

  &:hover {
    color: var(--color-brand-50);
    background-color: var(--color-brand-200);
    outline: 0.5rem solid var(--color-brand-200);
  }
`;

const StyledNavLink = styled(NavLink)`
  transition: color 0.2s;
  &:hover {
    color: var(--color-brand-50);
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
  const [isDarkMore, setIsDarkMode] = useState(true);
  function toggleDarkMode() {
    setIsDarkMode((value) => !value);
  }
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
        {isDarkMore && (
          <StyledIcon>
            <HiMiniSun size={24} onClick={toggleDarkMode} />{" "}
          </StyledIcon>
        )}
        {!isDarkMore && (
          <StyledIcon>
            <HiMoon size={24} onClick={toggleDarkMode} />
          </StyledIcon>
        )}
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
