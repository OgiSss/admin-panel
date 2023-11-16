import styled from "styled-components";

const Divider = styled.div`
  border-top: 1px solid var(--color-grey-200);

  margin: ${({ margin }) => margin};
`;

export default Divider;
