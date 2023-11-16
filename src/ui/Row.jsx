import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${({ $type }) =>
    $type === "horizontal" &&
    css`
      flex-direction: row;
      justify-content: space-between;
    `}

  ${({ $type }) =>
    $type === "vertical" &&
    css`
      flex-direction: column;
    `}

    ${({ $gap }) => css`
    gap: ${$gap};
  `}
`;

Row.defaultProps = {
  $type: "horizontal",
  $gap: 0,
};

export default Row;
