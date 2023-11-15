import styled, { css } from "styled-components";

const StyledBadgeWrapper = styled.div`
  position: relative;
`;

const states = {
  error: css`
    background-color: var(--color-red-800);
  `,
  warning: css`
    background-color: var(--color-orange-700);
  `,
  info: css`
    background-color: var(--color-brand-700);
  `,
};

const StyledBadge = styled.div`
  position: absolute;
  height: 1.5rem;
  width: 1.5rem;
  font-size: 1rem;
  border-radius: 50%;
  text-align: center;
  left: -5px;
  top: -5px;

  ${({ $state }) => states[$state]}
`;

function Badge({ children, value = 0, state = "error" }) {
  return (
    <StyledBadgeWrapper>
      <StyledBadge $state={state}>{value}</StyledBadge>
      {children}
    </StyledBadgeWrapper>
  );
}

export default Badge;
