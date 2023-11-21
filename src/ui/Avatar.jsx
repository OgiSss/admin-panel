import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ContextMenu from "./ContextMenu";

const StyledUserAvatar = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const StyledAvatar = styled.img`
  width: 2.4rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

function Avatar({ fullName, url }) {
  const navigate = useNavigate();
  function handleLogoutClick() {
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (
    <>
      <ContextMenu>
        <ContextMenu.Toggle id="avatar">
          <StyledUserAvatar>
            <StyledAvatar
              src={url || "default-user.jpg"}
              alt={`Avatar of ${fullName}`}
            />
            <span>{fullName}</span>
          </StyledUserAvatar>
        </ContextMenu.Toggle>

        <ContextMenu.List id="avatar">
          <ContextMenu.Button onClick={handleLogoutClick}>
            Log out
          </ContextMenu.Button>
        </ContextMenu.List>
      </ContextMenu>
    </>
  );
}

export default Avatar;
