import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledContextMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
`;

const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  left: ${({ $position }) => $position.x}px;
  top: ${({ $position }) => $position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const MenuContext = createContext();

function ContextMenu({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function close() {
    setOpenId("");
  }
  const open = setOpenId;
  return (
    <MenuContext.Provider
      value={{ close, openId, open, setPosition, position }}
    >
      <StyledContextMenu>{children}</StyledContextMenu>
    </MenuContext.Provider>
  );
}

function List({ children, id }) {
  const { openId, position, close } = useContext(MenuContext);
  const ref = useOutsideClick(close);

  if (openId !== id) return null;
  return createPortal(
    <StyledList
      ref={ref}
      $position={{
        x: position.x,
        y: position.y,
      }}
    >
      {children}
    </StyledList>,
    document.body
  );
}

function Toggle({ id, children }) {
  const { open, close, openId, setPosition } = useContext(MenuContext);

  function handleClick(e) {
    e.stopPropagation();

    const rect = e.target.closest("button").getBoundingClientRect();

    let x = 0;
    if (window.innerWidth > rect.x + rect.width + 120) {
      x = rect.x;
    } else {
      x = rect.x - 60;
    }

    setPosition({
      x,
      y: rect.y + rect.height + 8,
    });

    if (openId === "" || openId !== id) {
      open(id);
    } else {
      close();
    }
  }
  return (
    <StyledToggle>
      {cloneElement(children, { onClick: (e) => handleClick(e) })}
    </StyledToggle>
  );
}

function Button({ children, onClick }) {
  const { close } = useContext(MenuContext);

  function handleClick() {
    close();
    onClick?.();
  }
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
}

ContextMenu.Toggle = Toggle;
ContextMenu.List = List;
ContextMenu.Button = Button;

export default ContextMenu;

{
  /* <ContextMenu>
        <ContextMenu.Toggle id="test">
          <HiEllipsisVertical />
        </ContextMenu.Toggle>

        <ContextMenu.List id="test">
          <ContextMenu.Button>Add</ContextMenu.Button>
          <ContextMenu.Button>Edit</ContextMenu.Button>
          <ContextMenu.Button>Delete</ContextMenu.Button>
        </ContextMenu.List>
      </ContextMenu> */
}
