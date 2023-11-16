import { useDarkMode } from "../context/DarkModeContext";
import styled from "styled-components";
import { HiMiniSun, HiMoon } from "react-icons/hi2";

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

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <StyledIcon>
        {isDarkMode ? (
          <HiMiniSun size={24} onClick={toggleDarkMode} />
        ) : (
          <HiMoon size={24} onClick={toggleDarkMode} />
        )}
      </StyledIcon>
    </>
  );
}

export default DarkModeToggle;
