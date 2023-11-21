import useUser from "./useUser";

function ProtectedRoute({ children }) {
  useUser();
  return <>{children}</>;
}

export default ProtectedRoute;
