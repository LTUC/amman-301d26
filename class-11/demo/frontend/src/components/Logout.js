import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  // view the data passed form Auth0 inside the react context
  // console.log(useAuth0());
  return (
    isAuthenticated &&
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default LogoutButton;