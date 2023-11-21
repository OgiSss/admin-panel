import { NavLink, useMatches } from "react-router-dom";
import styled from "styled-components";

const StyledBreadcrumbs = styled.ol`
  background-color: var(--color-brand-800);
  padding: 1.6rem;
  color: var(--color-grey-200);
  list-style: none;
  cursor: pointer;
  & li {
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Breadcrumbs() {
  let matches = useMatches();
  let crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match) => Boolean(match.handle?.crumb))
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match) => match.handle.crumb(match.data));

  return (
    <>
      {crumbs?.length > 0 && (
        <StyledBreadcrumbs>
          {crumbs.map((crumb, index) => (
            <li key={index}>
              <NavLink to={{ crumb }}>{crumb}</NavLink>
            </li>
          ))}
        </StyledBreadcrumbs>
      )}
    </>
  );
}

export default Breadcrumbs;
